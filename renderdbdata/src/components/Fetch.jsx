import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error));
    },[]);

  return (
    <div>
        <ul>
            {data.map(item=>(
                <li>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fetch