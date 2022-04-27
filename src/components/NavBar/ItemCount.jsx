import React, { useState, useEffect} from "react";
import './ItemCount.css';

const ItemCount = ({stockMin, stockMax, product}) =>{

console.log(stockMin, stockMax);

const [stock, setStock] = useState(stockMin)

const totalPrice = product.price * stock;

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
        <img src={product.image} alt={product.alt} width="100%" />
        <a href={product.urlPnt}><h3>{product.prodName}</h3></a>

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