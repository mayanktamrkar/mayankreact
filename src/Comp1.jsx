import React from 'react'
import { useState } from 'react';
import './index.css';

//import { Comp2 } from './Comp2'


 


export const Comp1 = () => {
  const [state,setstate]=useState(["","","","","","","","",""])
  const [val,setval]=useState("x")
  const c=()=>{
    if(val==="x"){
      setval("o")
    }else{
      setval("x")
    }
  }
  const change=(p)=>{
    p.target.disabled=true
    console.log(p.target.value)
    
    let str=Array.from(state)
    str[p.target.value]=val
    setstate(str)
    c()
   
  }
  
  
  return (<>
 
 <h1 id="h" >Tic tak toe</h1>
  <div className='divcenter'>
  
  <h1>Trun of {val}</h1>
    <div className='di'>
     
    <div className='s'>
  <button value={0} className='bu' onClick={change}>{state[0]}</button>
  <button className='bu' value={1} onClick={change}>{state[1]}</button>
  <button className='bu' value={2} onClick={change}>{state[2]}</button>

  </div>
  <div>
  <button className='bu' value={3} onClick={change}>{state[3]}</button>
  <button className='bu' value={4} onClick={change}>{state[4]}</button>
  <button className='bu' value={5} onClick={change}>{state[5]}</button>

  </div>
  <div>
  <button className='bu' value={6} onClick={change}>{state[6]}</button>
  <button className='bu' value={7} onClick={change}>{state[7]}</button>
  <button className='bu' value={8} onClick={change}>{state[8]}</button>

  </div>
    </div>
 
  </div>

  



   
  </>
 
  )
}
