import React,{useState} from 'react'

const Hookrules = () => {
    const [myName, setMyName]=useState("anjali pandey");

    const changeName=()=>{

           //  console.log(val)
        
        let val=myName;
        
        if(val==="anjali pandey"){
            setMyName("navneet");
            }else{
            setMyName("anjali pandey")
            }
         }
  return (
    <div>
        <h1>{myName}</h1>
        <button onClick={changeName}>click to change name</button>
    </div>
  )
}

export default Hookrules;