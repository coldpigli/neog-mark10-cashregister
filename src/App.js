import { set } from 'object-path';
import React, { useState } from 'react';
import './index.css';

function App() {

  const[billAmount, setBillAmount] = useState();
  const[amountPaid, setAmountPaid] = useState();
  const[alertMessage, setAlertMessage] = useState("");
  const availableDenominations = [2000, 500, 100, 20, 10, 5, 1];
  let numberArray = [0,0,0,0,0,0,0];
  const [ValueInTable,setValueInTable] = useState(numberArray);
  


  const valdatingInputs = () => {
      if(billAmount>0){
        //calculate change
        if(amountPaid<billAmount){
          setAlertMessage("You seem to short on money. Wanna do the dishes?")
        }
        else{
          setAlertMessage("");
          calculateDenomination(amountPaid-billAmount);
        }
      }
      else{
        setAlertMessage("Bill amount cannot be 0 or less!!")
      }
  }

  const calculateDenomination = (money) => {
    for(let i = 0; i<availableDenominations.length; i++){
      const numberOfNotes = Math.trunc(money/availableDenominations[i]);
      money = money % availableDenominations[i];
      numberArray[i] = numberOfNotes;
      
    }
    setValueInTable(numberArray);
  }
  
  
  return (<div className= "container"> 
    <h1>Cash Register</h1>
    <p>Cash Register is a simple web app that tells you what denominations to return as change</p>

    <label htmlFor="billAmount">Enter the bill amount</label>
    <input id = "billAmount" type = "number"  onChange = {(e)=>{setBillAmount(e.target.value)}}></input>

    <label htmlFor="amountPaid">Enter the amount paid</label>
    <input id = "amountPaid" type = "number"  onChange = {(e)=>{setAmountPaid(e.target.value)}}></input>

    <button onClick = {valdatingInputs}>Calculate</button>
    <h3>{alertMessage}</h3>


    <table className="change-table">
          <caption>
            Denominations to be returned
          </caption>
          <tbody><tr>
            <th>No of Notes</th>
            {ValueInTable.map((number)=>{
              return <td className="no-of-notes">{number}</td>
            })}
            
          </tr>
          <tr>
            <th>Note</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody></table>
  </div>
  
    )
}

export default App;
