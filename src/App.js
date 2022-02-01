import logo from './logo.svg';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Decriment, incriment } from './Action/Action';

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div>
     <h1>react with redux</h1>
     <div className='btn'>
       <button onClick={()=>dispatch(incriment())}>add</button>
       <div style={{color:"red",backgroundColor:"black" ,width:"40px" ,margin:"20px"}} >
       <h1>{mystate}</h1>
       </div>
      
       <button onClick={()=>dispatch(Decriment())}>remove</button>
     </div >
    </div >
  )
}

export default App;

