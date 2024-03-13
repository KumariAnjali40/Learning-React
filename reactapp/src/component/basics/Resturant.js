import React, { useState } from 'react'
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
 
  const [menuData,setMenuData]=useState(Menu);

  return (
    <>
       <nav className='navbar'></nav>
       <MenuCard  menuData={menuData}/>
    </>
  )
}

export default Resturant