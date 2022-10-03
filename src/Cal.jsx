import React from 'react'

import './Cal.css';

import { Link } from 'react-router-dom';


import { useState } from 'react'
//import react from 'react';

const  Cal=()=> {
  var s;
  
  const [value,setvalue]=useState("")
  const [i,seti]=useState(0)

  const change=(e)=>{
    if(value!==undefined){
      setvalue(value+e)
      //setinput(value)

    }else{
      setvalue(""+e)
    }

    seti(1)
   
    
   

  }
  const equal=()=>{
    try {
      s=eval(value)
       setvalue(s)
      
    } catch (error) {
      setvalue("")
      
    }
    seti(1)
  
  
    
    console.log(s)
    
  }
  const clear=()=>{
     setvalue("")
     seti(0)
  }
  const op=(e)=>{
     if(i!=0){
       
      setvalue(value+e)
      seti(0)

     }
     

    
   
    
  }
 
  return (
    <div className="Cal">
      <header className="Cal-header">
       
       
        <div className='cal'>
          <input id='input' disabled type='text'  value={value} ></input>
          <div className='spaceu'>
          <button name='1' onClick={()=>{change("1")}}  className='button'>1</button>
          <button onClick={()=>{change("2")}} className='button'>2</button>
          <button onClick={()=>{change("3")}} className='button'>3</button>
          <button onClick={()=>{change("4")}} className='button'>4</button>


          </div>
          <div>
          <button onClick={()=>{change("5")}} className='button'>5</button>
          <button onClick={()=>{change("6")}} className='button'>6</button>
          <button onClick={()=>{change("7")}} className='button'>7</button>
          <button onClick={()=>{change('8')}} className='button'>8</button>


          </div>
          <div>
          <button onClick={()=>{change("9")}} className='button'>9</button>
          <button onClick={()=>{change("0")}} className='button'>0</button>
          <button onClick={()=>{op("+")}} className='button'>+</button>
          <button onClick={()=>{op("*")}} className='button'>*</button>


          </div>
          <div>
          <button onClick={()=>{op("-")}} className='button'>-</button>
          <button onClick={()=>{op("/")}} className='button'>/</button>
          <button onClick={()=>{clear()}} className='button'>c</button>
          <button onClick={()=>{equal('=')}} className='button'>=</button>


          </div>
        
          
        </div>

       
      
      </header>
    </div>
  );
}

export default Cal;
