import './AdressItem.css';
import Card from '../UI/Card';
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase"
import { useEffect, useState } from 'react';

function AdressItem() {
  const [adresslist, setAdressList] = useState([]);
  const adressCollectionRef = collection(db, "PhoneBook");

  useEffect(() => {
    function updateAdressList(snapshot) {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAdressList(data)
    };

    const unsubcribe = onSnapshot(adressCollectionRef, updateAdressList);
    return () => unsubcribe();
  }, [])


  return (
    <div>
    {adresslist.map((item) => (
       <Card className="adress-item">
        <div className="adress-item__description">
        <div className='adress-galaxy'>
          <div className= "adress-galaxy__month">{item.galaxy}</div>
        </div>
        <h1>{item.name}</h1>
        <h2>{item.email}</h2>
        <div className='adress-item__number'>{item.number}</div>
      </div>
    </Card>
    ))}
    </div>
  );
}

export default AdressItem;