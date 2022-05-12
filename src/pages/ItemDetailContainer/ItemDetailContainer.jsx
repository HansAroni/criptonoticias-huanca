import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/NavBar/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Bitcoin BTC',
                price: '$39,722.11',
                stock: 5,
                category: 'Cryptocurrency',
                imageUrl: 'https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Emblema.png'
              },
              {
                id: 2,
                title: 'Ethereum ETC',
                price: '$2,927.85',
                stock: 5,
                category: 'Cryptocurrency',
                imageUrl: 'https://logos-marcas.com/wp-content/uploads/2020/12/Ethereum-Logo.png'
              },
              {
                id: 3,
                title: 'Binance Coin BNB',
                price: '$401.87',
                stock: 5,
                category: 'Cryptocurrency',
                imageUrl: 'data:image/png;base64,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'
              },
              {
                id: 4,
                title: 'Tether USDT',
                price: '$1',
                stock: 5,
                category: 'Fiat',
                imageUrl: 'data:image/png;base64,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'
              }
              ,
              {
                id: 5,
                title: 'USD Coin USDC',
                price: '$1',
                stock: 5,
                category: 'Fiat',
                imageUrl: 'data:image/jpeg;base64,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'
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