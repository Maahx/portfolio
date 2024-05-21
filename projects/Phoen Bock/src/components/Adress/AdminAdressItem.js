import './AdressItem.css';
import Card from '../UI/Card';
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore"
import { db } from "../../firebase"
import { useEffect, useState } from 'react';

function AdressItem() {
  const [adresslist, setAdressList] = useState([]);
  const adressCollectionRef = collection(db, "PhoneBook");

  const ClickHandler = async (id) => {
    console.log(id)
    await deleteDoc(doc(adressCollectionRef, id));
    //await deleteObject(ref(storage, img_id));
  };

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
        <button className='delete' onClick={() => ClickHandler(item.id)}>Delete</button>
      </div>
    </Card>
    ))}
    </div>
  );
}

export default AdressItem;