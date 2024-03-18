import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExerciseTracker from './component/ExerciseTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExerciseTracker/>
    </>
  )
}

export default App
