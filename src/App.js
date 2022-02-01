import logo from './logo.svg';
import React, { useState } from 'react';
import { incriment, decriment } from "./Action/Action";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const mystate = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"blue",width:"250px",margin:"60px"}}>React with redux </h1>
      <div className='btn'>
        <button onClick={() => dispatch(incriment())}>add</button>
        <h1>{mystate} </h1>
        <button onClick={() => dispatch(decriment())}>remove</button>
      </div>
    </div>
  )
}
export default App;

