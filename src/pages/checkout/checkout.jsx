import {useState,useContext } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import './checkout.css';

import db from '../../services/firestore';
import CartContext from '../../store/cart-context';
import Spinner from '../../components/NavBar/Spinner/Spinner';

const Checkout = () => {
    // { buyer: { name, phone, email }, items: [{ id, title, price, amount }], date, total }

    const {products,getTotalPrice,clear}= useContext(CartContext)

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Emailc:'',
        Telefono:''
    })

    const {Nombre, Email, Emailc, Telefono} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            clear()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = products.map(e => {return {id:e.id,title:e.title,price:e.price,amount:e.quantity}})        
        console.log(products)
        const total = getTotalPrice()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }
    

    return (
        <>
            <h1>Finalizando Compra</h1>
            <hr />
            
            {load ? <Spinner />
                : (!orderID&&<div>
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Emailc"
                            placeholder="Confirmar Email"
                            value={Emailc}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div>
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <Link to="/" className='link'><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout