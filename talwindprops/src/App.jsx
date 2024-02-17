import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj={
    username : "Anjali",
    age: 21
  }

  let newArray=[1,2,3,4]

  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwing test</h1>

       <Card  username="chaiaurcode"/>
       
       <Card/>
    </>
  )
}

export default App
