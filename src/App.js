import React, { useState } from 'react';
import './index.css';

function App() {
  
  
  return (<div className= "container"> 
    <h1>Cash Register</h1>
    <p>Cash Register is a simple web app that tells you what denominations to return as change</p>

    <label for="billAmount">Enter the bill amount</label>
    <input id = "billAmount" type = "number"></input>

    <label for="amountPaid">Enter the amount paid</label>
    <input id = "amountPaid" type = "number"></input>

    <button>Calculate Denominations</button>
    <h3>Alert Message here</h3>


    <table class="change-table">
          <caption>
            Denominations to be returned
          </caption>
          <tbody><tr>
            <th>No of Notes</th>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
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
