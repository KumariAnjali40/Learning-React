import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './component/Fetch'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Fetch/>
    </>
  )
}

export default App
