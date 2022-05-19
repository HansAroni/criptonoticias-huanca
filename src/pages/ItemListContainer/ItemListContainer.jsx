import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/NavBar/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './ItemListContainer.css'

function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = category && query(
    itemCollection,
    where ('category', '==', category)
  );

  return getDocs(q || itemCollection);
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));
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