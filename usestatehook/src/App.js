import React from 'react'
import Hookrules from './component/Hookrules'




const App = () => {
//   // console.log(useState("anjali")); // return an array first index is val and second is function.
//    // const [change,setChange]= useState("");==> contain initial state.
//    var [val,setChange]= useState("anjali pandey");

  
// // var val="anjali"
// const changeName=()=>{

//   //  console.log(val)

//    let myName=val;

//    if(myName==="anjali pandey"){
//     setChange("navneet");
//    }else{
//     setChange("anjali pandey")
//    }
// }
// console.log(val)

  return (
    <div>
       {/* <h1>{val}</h1> */}
       {/* <button className='btn' onClick={changeName}>click please</button> */}
       <Hookrules/>
    </div>
  )
}

export default App