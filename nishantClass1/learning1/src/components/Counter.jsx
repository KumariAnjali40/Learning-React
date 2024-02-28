import React, { useState } from 'react'
import '../css/counter.css'

const Counter = () => {
  const [count,setCount]=useState(20);

  function incrCount(){
    setCount(count+1);
  }

  function decCount(){
    setCount(count-1);
  }



  return (
    <div id="counterDiv">
          <h1 id="countHead">Counter App</h1>
          <p id="countPara">Count:{count}</p>
          <div>
          <button onClick={incrCount} id="incBtn" className="btn">+</button>
          <button onClick={decCount} id="decBtn" className='btn'>-</button>

          </div>

    </div>
    
  )
}

export default Counter