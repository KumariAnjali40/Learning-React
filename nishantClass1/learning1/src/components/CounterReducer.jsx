import React, { useReducer } from 'react'
import '../css/counter.css'
import reducer from './reducer';

import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons';


const CounterReducer = () => {

  const [state,dispatch]=useReducer(reducer,{counter:0});
  return (
    <div>
    <div>
    <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon/>}
      variant='outline'
    />
    <MenuList>
      <MenuItem icon={<AddIcon />} command='⌘T'>
        New Tab
      </MenuItem>
      <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
        New Window
      </MenuItem>
     
      
    </MenuList>
  </Menu>

  </div>
    <div id="counterDiv">
    <h1 id="countHead">Counter App</h1>
    <p id="countPara">Count:{state.counter}</p>
    <div>
    <button onClick={()=>dispatch({type:"increment"})} id="incBtn" className="btn">+</button>
    <button onClick={()=>dispatch({type:"decrement"})} className='btn'>-</button>
    </div>
  </div>
  </div>
  )
}

export default CounterReducer