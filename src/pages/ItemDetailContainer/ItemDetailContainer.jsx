import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/NavBar/ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css'

function getItems(id) {
    const db = getFirestore ();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);

}
function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItems(id)
      .then(snapshot => {
        setItem({ ...snapshot.data(), id: snapshot.id});
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