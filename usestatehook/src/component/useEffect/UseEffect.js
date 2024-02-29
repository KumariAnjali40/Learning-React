import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [count,setCount]=useState(0);

   useEffect(()=>{
    // console.log("HELLO");
    if(count>=1){
    document.title=`Chats (${count})`
    }else{
        document.tilte=`Chats`
    }
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