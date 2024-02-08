import {React, useState} from 'react';
import './App.css';


function App() {

  const [value, setValue] = useState(0);

  function IncValue(){
    setValue(value + 1);
  }

  function DecValue(){
    setValue(value - 1);
  }

  return (

    <>
      <div className="container">
        <h3>Increament & Decreament value Game</h3>
        <h4>Using useState Hook Understand how State update the value</h4>

        <div className="content">
        <div className='value'>{value}</div>
        <button onClick={IncValue}>Increament</button>
        <button onClick={DecValue}>Decreament</button>
        </div>
      </div>
    </>

  )
}

export default App;
