import { collection, setDoc, doc } from "firebase/firestore";
import NewAdress from "../components/NewAdress/NewAdress";
import { db } from "../firebase"
import ExpenseItem from "../components/Adress/AdminAdressItem";

function Admin () {

  const adressCollectionRef = collection(db, "PhoneBook")

  async function addAdressHandler(adress) {
    try {
      await setDoc(doc(adressCollectionRef), {
        name: adress.name,
        number: adress.number,
        galaxy: adress.galaxy,
        email: adress.email,
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <NewAdress onAddAdress={addAdressHandler} />
      <ExpenseItem />
    </div>
  );
}

export default Admin