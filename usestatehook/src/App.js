import React from 'react'
// import Hookrules from './component/Hookrules'
// import UseStateArray from './component/UseStateArray'
// import BasicForm from './component/forms/BasicForm'
import UseEffect from './component/useEffect/UseEffect'
// import UseStateObject from './component/UseStateObject'




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
       {/* <Hookrules/> */}
       {/* <UseStateArray/> */}
       {/* <UseStateObject/> */}
       {/* <BasicForm/> */}
       <UseEffect/>
    </div>
  )
}

export default App