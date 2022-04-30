import React from "react";
import "./ItemDetailContainer.css";
import { useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

function getItem() {
    const myPromise = new Promise((resolve, reject)=> {
        const item = {
            id: 1,
            title: 'Ada Cardano',
            price: 12,
            stock: 5,
            image: 'https://assets.iproup.com/assets/jpg/2021/02/16196.jpg?6.3.1',
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
    return myPromise
}

function ItemDetailContainer() {

    const [item, setItem] = useState({});

    useEffect (() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocorrio un error, revisar la consola');
            });
    }, []);
    
    return (
        <div className="item-detail-container"> 
            <ItemDetail item={item} />
        </div>
    )
    }

export default ItemDetailContainer;