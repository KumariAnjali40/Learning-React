import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)

  //counter is variable  and setCounter(it is a name only) is function and the default value is 15.
 
  const addValue = ()=>{
    setCounter(counter+1);   //new value assign .
    
  }

  const remvoeValue=()=>{
    setCounter(counter-1); 
    
  }



  return (
    <>
      <h1> Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
       onClick={addValue}
      
      >Add value {counter}</button>
      <br></br>
      <button
      onClick={remvoeValue}
      >Dec value  {counter}</button>

      <p> footer: {counter} </p>
    </>
  )
}

export default App
