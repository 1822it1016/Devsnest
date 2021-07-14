import './App.css';
import Data from "./Data.js"
import { useState } from 'react';
import Card from "./Card.js"

function App() {
  const [da,setDa]=useState(Data);
  function handleDelete(index){
  //   setDa(da.filter(val=>val.index!==Data.index));
  let newData = da.filter(val=>val.id!==index);
  setDa(newData);
  console.log(newData);
  }
  return (<>
  <div>
      <h1>
        Instructions
      </h1>
      <p>
      pass value and setter of the state to the component as props
      </p>
      <div>
      {
        da.map((e,i)=>(<Card name={e.name} cont={e.cont} handleDelete={()=>handleDelete(e.id)} />))
      }
        </div>
    </div>
  </>
  );
}
export default App;
