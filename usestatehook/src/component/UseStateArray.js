import React,{useState} from 'react'

const UseStateArray = () => {
   
    var bioData=[
        {
            id:0,myName:"anjali",age:24
        },{
            id:1,myName:"puspa",age:22
        }
    ]

    console.log(bioData);

  const [myArray,setmyArray ]=useState(bioData);

     const clearArray=()=>{
         setmyArray([]);
     }
  return (
    <>
        {/* <h1 className='h1'>Name:Anjali and Age: 24</h1> */}
        {
            myArray.map((curr)=>  <h1 className='h1'>Name: {curr.myName} and Age: {curr.age}</h1>)
        
        }
        <button  onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray