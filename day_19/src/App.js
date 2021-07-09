import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  return (
    <><div>
    There are 4 counter component instances that each manage their own state.
    </div>
    <button onClick={() => setCount(count + 1)}>{count}</button>
    <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    <button onClick={() => setCount3(count3 + 1)}>{count3}</button>
    <button onClick={() => setCount4(count4 + 1)}>{count4}</button>
    </>
  );
}

export default App;
