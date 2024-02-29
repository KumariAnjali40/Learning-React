import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {

 const [width,setWidth]=useState(window.screen.width);



const actualWidth=()=>{
    // console.log(window.innerWidth);
    setWidth(window.innerWidth);
}



  useEffect(()=>{
    console.log("add event")
      window.addEventListener("resize",actualWidth);
      return ()=>{
        console.log("remove event")
        window.removeEventListener("resize",actualWidth);
      }
  })


  return (
    <div>
        <h1>The size of the window is : </h1>
        <h1>{width}</h1>
    </div>
  )
}

export default CleanUpFunction