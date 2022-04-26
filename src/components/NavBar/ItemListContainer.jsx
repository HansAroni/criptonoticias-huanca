import React from "react";
import "./ItemListContainer.css";
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const product = {
        idProduct   : 256,
        prodName    : 'Cardano',
        description : 'Ada Cardano',
        urlPnt     : '',
        image       : '../../img/ada.png',
        alt         : 'Ada-Cardano',
        price       : 1.2 ,
        stock       : 20,
        initial     : 1,
    };
    function onAdd(qtty, price) {
        console.log('La cantidad es: '+qtty+' precio:'+price);

    }
    return (
        <>
            <h1> Contenido en construccion...</h1>  
            <p> {greeting}</p>
            <ItemCount stockMin={1} stockMax={5} product={product} />
        </>
    )

}

export default ItemListContainer;