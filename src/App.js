import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd(){
    //state variable will stay constant in this unless you use function inside
    setCount(count + 1)
    setCount(count + 1)
    //above line will increase only 1 in our counter, 
    //from the next line if you use counter function than it will increase as many time you want
    setCount(count => count + 1)
  }

  return (
    <div className='App'>
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>ADD</button>
        <button onClick={() => setCount(count - 1)} className="sub">SUB</button>
      </div>
    </div>
  )
}

