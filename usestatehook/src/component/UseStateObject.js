import React,{useState} from 'react'

const UseStateObject = () => {
    const [myObj,setmyOjb]= useState({myName:"Anjali", myAge:"24",degree:"BSC"})

   const updateObj=()=>{
       setmyOjb({...myObj,myName:"Navneet"});
    }


  return (

    <div>
        <h1>Name:{myObj.myName} age:{myObj.myAge} degree:{myObj.degree}</h1>
        <button onClick={updateObj} >Update</button>
    </div>
  )
}

export default UseStateObject