import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [total, setTotal] = useState(0);

  const updateTotal=(countValue)=>{
    setTotal(total+countValue);
  }

  return (
    <div>
     <h1>Parent Component</h1>
     <p>Total:{total}</p>
     <Counter onUpdate={updateTotal} />
    </div>
  )
}

export default App
