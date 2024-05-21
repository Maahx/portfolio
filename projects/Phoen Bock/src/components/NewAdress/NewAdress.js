import "./NewAdress.css"
import AdressForm from "./AdressForm"

function NewAdress(props) {

  function saveAdressDataHandler(enteredAdressData) {
    const adressData = {
      ...enteredAdressData
    }
    props.onAddAdress(adressData)
  }

  return(
    <div className="new-adress">
      <AdressForm onSubmittedData={saveAdressDataHandler}/>
    </div>
  )
}

export default NewAdress