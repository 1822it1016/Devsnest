import { useState } from 'react';
import './App.css';

function App() {
  const [List,setList]=useState([]);
  const handle = () =>
  {
      setList((old) =>
      {
return [...old,List];
      })
    
  }
  console.log(List);
  return (
    <>
    <div className="main">
      <div className="upper">
        <h1>Calorie App</h1>
        <input type="text" placeholder="Enter name of dish"/>
        <input type="number"  placeholder="Enter Calories"/>
        <br/>
        <button onClick={handle}>add</button>
      </div>
      <div className="lower">

      </div>
    </div>
    
    
    </>
  );
}

export default App;
