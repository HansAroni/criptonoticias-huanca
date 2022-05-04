import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/NavBar/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Batman',
                price: '$450',
                stock: 5,
                imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg'
            },
            {
                id: 2,
                title: 'Superman',
                price: '$600',
                stock: 5,
                imageUrl: 'https://www.ecccomics.com/content/productos/10036/Superman_109_30_1a_cubierta_CORR.jpg'
            },
            {
                id: 3,
                title: 'Flash',
                price: '$350',
                stock: 5,
                imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
            }
        ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer