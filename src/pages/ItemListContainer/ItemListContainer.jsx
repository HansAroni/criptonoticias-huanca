import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../../components/NavBar/ItemList/ItemList';
import './ItemListContainer.css'

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Batman',
        price: '$450',
        stock: 5,
        category: 'superheroes',
        imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg'
      },
      {
        id: 2,
        title: 'Superman',
        price: '$600',
        stock: 5,
        category: 'superheroes',
        imageUrl: 'https://www.ecccomics.com/content/productos/10036/Superman_109_30_1a_cubierta_CORR.jpg'
      },
      {
        id: 3,
        title: 'Flash',
        price: '$350',
        stock: 5,
        category: 'superheroes',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      }
    ];
    const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error, revisar la consola!');
      });
  }, [categoryId]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
    </div>
  )
}

export default ItemListContainer