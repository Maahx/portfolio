import { useState, useEffect } from "react";
import "./AdressForm.css"

function AdressForm(props) {
  const [userInput, setUserInput] = useState({
    enteredName:"",
    enteredNumber:"",
    enteredEmail:"",
    enteredGalaxy:""
  });

  function nameChangeHandler(event) {
    setUserInput((prevState)=>{ 
      return {
        ...prevState, enteredName: event.target.value}
      });
    }
    
  function numberChangeHandler(event) {
    setUserInput((prevState)=>{
      return {
        ...prevState, enteredNumber: event.target.value}
      });
    }
    
  function emailChangeHandler(event) {
    setUserInput((prevState)=>{ 
      return {
        ...prevState, enteredEmail: event.target.value
      } 
    }); 
  }
  
  function galaxyChangeHandler(event) {
    setUserInput((prevState)=>{ 
      return {
        ...prevState, enteredGalaxy: event.target.value
      } 
    }); 
  }
  
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = { 
      name: userInput.enteredName, 
      number: userInput.enteredNumber, 
      email: userInput.enteredEmail,
      galaxy: userInput.enteredGalaxy
    }; 
    
    if (expenseData.name === "" || expenseData.number === "" || expenseData.email === "" || expenseData.galaxy === "") {
      setUserInput( ()=>{
       return{ 
        enteredName:"", 
        enteredNumber:"",
        enteredEmail:"", 
        enteredGalaxy:""
      }
      })
    } 
    
    else { 
      props.onSubmittedData(expenseData); 
      setUserInput( ()=>{ 
        return{ 
          enteredName:"", 
          enteredNumber:"", 
          enteredEmail:"",
          enteredGalaxy:"" 
        }
      })
    }
  } 
  
  return (
  <form onSubmit={submitHandler}>
    <div className="new-adress__controls">
      <div className="new-adress__control">
        <label>Name</label>
        <input type="text" 
        value={userInput.enteredName} 
        onChange={nameChangeHandler} />
      </div>
      <div className="new-adress__control">
        <label>Number</label>
        <input type="text" 
        value={userInput.enteredNumber}
        onChange={numberChangeHandler} />
      </div>
      <div className="new-adress__control">
        <label>Email</label>
        <input type="text"
        value={userInput.enteredEmail}
        onChange={emailChangeHandler} />
      </div>
      <div className="new-adress__control">
        <label>Galaxy</label>
        <input type="text"
        value={userInput.enteredGalaxy}
        onChange={galaxyChangeHandler} />
      </div>
    </div>
    <div className="new-adress__actions">
      <button type="sumbit">Add New Contact</button>
    </div>
  </form>
  )
}

export default AdressForm;