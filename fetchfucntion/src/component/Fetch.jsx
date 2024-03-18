import React, { useEffect, useState } from 'react'

const Fetch = () => {
   const [data,setState]=useState([]);

   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setState(data))
        .catch(error=>console.error(error))
   },[])
    
  return (
    <div>
        {data.map(item=>(
          <li>{item.title}</li>
        ))}
    </div>
  )
}

export default Fetch