import React,{ useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval=setInterval(() => {
      setCount(count+1);
    }, 1000);

    return ()=>{
      clearInterval(interval);
    }
  },[count]);

  return (
    <>
      <div>Seconds:{count}</div>
    </>
  )
}

export default App
