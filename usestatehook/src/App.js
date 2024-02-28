import React,{useState} from 'react'




const App = () => {
  // console.log(useState("anjali")); // return an array first index is val and second is function.
   // const [change,setChange]= useState("");==> contain initial state.
   var [val,setChange]= useState("anjali pandey");

  
// var val="anjali"
const changeName=()=>{
  //  val="pandey" 
  //  console.log(val);
  val="navneet"
  setChange(val);
}
console.log(val)

  return (
    <div>
       <h1>{val}</h1>
       <button className='btn' onClick={changeName}>click please</button>
    </div>
  )
}

export default App