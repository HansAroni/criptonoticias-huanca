import React, { useState} from "react";
import './ItemCount.css';

const ItemCount = ({stockMin, stockMax, item}) =>{

console.log(stockMin, stockMax);

const [stock, setStock] = useState(stockMin)

const totalPrice = item.price * stock;

function increase() {
    if (stock < stockMax) {
        setStock(stock +1);
    }
}
function decrease() {
    if (stock > stockMin) {
        setStock(stock - 1);
    }
}
const onAdd = () => {
    const message = `Agregaste ${stock} producto`
    stockMin === 1 ? alert(message) : alert(`${message}s`)
}
return (
    <>
    <div className='card'>
        <img src={item.image} alt={item.alt} width="100%" />
        <a href={item.urlPnt}><h3>{item.prodName}</h3></a>

        <p className="price">$ {totalPrice}</p>
        <div className='modifyQtty'>
            <button onClick={decrease} className='buttonChange'>-</button>
            <h5>{stock}</h5>
            <button onClick={increase} className='buttonChange'>+</button>
        </div>
        <p><button onClick={onAdd} className='addToCart'>Add to Cart</button></p>
    </div>
    </>
)
}

export default ItemCount