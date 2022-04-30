import React from "react";
import "./ItemListContainer.css";
import ItemCount from '../ItemCount';
import getData from "../../../services/getData";
import { useState, useEffect} from 'react';
import ItemList from "../ItemList";
import axios from "axios";

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])
    console.log("Products befeore promise", items) // Empty

    useEffect(() =>{
        getData
        .then((response) => setItems(response))
        .catch((error) => console.log("Error: ",error))
    }, []);

    const item = {
        idProduct   : 256,
        prodName    : 'Cardano',
        description : 'Ada Cardano',
        urlPnt     : '',
        image       : 'https://assets.iproup.com/assets/jpg/2021/02/16196.jpg?6.3.1',
        alt         : 'Ada-Cardano',
        price       : 1.2 ,
        stock       : 20,
        initial     : 1,
    };
    
    return (
        <>
            <h1> Contenido en construccion...</h1>  
            <p> {greeting}</p>
            <ItemList products={products} />
            <ItemCount stockMin={1} stockMax={5} item={item} />
        </>
    )

}

export default ItemListContainer;