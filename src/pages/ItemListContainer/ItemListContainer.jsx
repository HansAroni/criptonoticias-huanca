import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/NavBar/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';
import './ItemListContainer.css'

function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = query(
    itemCollection
  );

  return getDocs(q)
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // const db = getFirestore();

    // const itemCollection = collection(db, 'items');

    // const q = query(
    //   itemCollection,
    //   where('price', '<', 500),
    //   limit(1)
    // );

    // getDocs(q)
    //   .then(snapshot => {
    //     console.log(snapshot.docs.map(doc => {
    //       return { ...doc.data(), id: doc.id }
    //     }));
    //   })
    //   .catch(
    //     err => console.log(err)
    //   );

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