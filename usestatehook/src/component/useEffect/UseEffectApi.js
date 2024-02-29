import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [users,setUsers]=useState([]);

   const getUsers=async()=>{
     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //   const data= await res.json();
    //   console.log(data);
       setUsers(await res.json());
    }


   useEffect(()=>{
      getUsers();
   },[])




  return (
    <>
       {/* <h1> List of post </h1>
        <p>userID</p>
        <p>Title</p>
        <div>Body</div> */}

       <h1> List of post </h1>
        {
        users.map((curr)=>{
             return (
                <div>
                      <p>{curr.userId}</p>
                      <p>{curr.title}</p>
                      <div>{curr.body}</div>
                </div>
             )
        })

        }
    </>
  )
}

export default UseEffectApi