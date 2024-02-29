import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [count,setCount]=useState(0);

   useEffect(()=>{
    // console.log("HELLO");
    document.title=`Chats (${count})`
   })

  const countChange=()=>{
    setCount(count+1);
  }


  return (
    <div>
        <p>{count}</p>

        <button onClick={countChange}>Click me</button>
    </div>
  )
}

export default UseEffect