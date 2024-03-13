import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './components/Fetch'
import Text from './components/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Text/>
      <Fetch/>
       
    </>
  )
}

export default App
