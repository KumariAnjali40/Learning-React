import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data,setData] = useState(null);

  async function fetchData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/comments');
    console.log(res);
    let data =await res.json()
    console.log(data);
    setData(data);
  }

  useEffect(()=>{
    fetchData();
  },[])
 
  return (
    <>
      <ul>
        <li>
          {data && data.map(item=>(
            <li key={item.id}>
            <div>{item.name} </div>
            <div>{item.email} </div>
            <div>{item.body} </div>
            </li>
          ))}
        </li>
      </ul>
    </>
  )
}

export default App
