'use client'


import { useState } from 'react'
import './src/App.css'



function App() {
  const [count, setCount] = useState("")
  const [persons, setPersons] = useState(1)
  const [procent, setProcent] = useState(51)
  const [customProcent, setCustomProcent] = useState("")
  

  function listenAmount(event){
     setCount(event.target.value)
  }
  function listPersons(event){
     setPersons(event.target.value)
  }

  function getProcent(event){
    const target = event.target;
    setProcent(target.value)
}

function listenCustom(event){
    setCustomProcent(event.target.value)
}

const handleClick = () => {
  setCount(0);
  setPersons(1)
  setCustomProcent("Custom")
};

let custom  = customProcent
const calc  = (count / 100) * procent ;

  return (
    <div className="App">
      <div className="left-main">
            <div className="bill-sum">
              <div className="bill">Bill</div>
              <input type={"number"} onChange={listenAmount}
                    value={count} 
              ></input>
            </div>
            <div className="tip-calc">
              <div className="tip">Select Tip %</div>
              <div className="buttons-calc">
                    <button onClick={getProcent} value={5} id='1'>5%</button>
                    <button onClick={getProcent} value={10} id='2'>10%</button>
                    <button onClick={getProcent} value={15} id='3'>15%</button>
                    <button onClick={getProcent} value={25} id='4'>25%</button>
                    <button onClick={getProcent} value={50} id='5'>50%</button>
                    <button  className='custom-btn'>
                      <input 
                      onChange={listenCustom}
                      value={custom}
                      onClick={getProcent}
                      placeholder={"Custom"}
                      type={"number"}></input>
                    </button>
              </div>
            </div>
            <div className="nr-ppl">
              <div className="ppl">Number of people</div>
              <input onChange={listPersons}
                     value={persons}
                     type={"number"}   ></input>
              </div>               
      </div>
     
            <div className="bill-calc">
                <div className="ala">
                  <div className="tip-amount">
                    <div className="left">
                      <div className="tip-bold">Tip Amount</div>
                      <div className="person">/person</div>
                    </div>
                    <div className="right">{(calc  / persons).toFixed(2)}</div>
                  </div>
                  <div className="tip-amount">
                    <div className="left">
                      <div className="tip-bold">Total</div>
                      <div className="person">/person</div>
                    </div>
                    <div className="right">{calc.toFixed(2)}</div>
              </div>     
                  </div>
              <button onClick={handleClick}
                      >Reset</button>
            </div>
    </div>
  )
}

export default App
