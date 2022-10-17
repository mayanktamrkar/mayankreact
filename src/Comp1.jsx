import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './index.css';

//import { Comp2 } from './Comp2'


 


export const Comp1 = () => {
  const [state,setstate]=useState(["","","","","","","","",""])
  const [val,setval]=useState("x")
  const [status,setStatus]=useState(true)
  const c=()=>{
    if(val==="x"){
      setval("o")
    }else{
      setval("x")
    }
  }
  const change=(p,v)=>{

    
    // console.log(p)
    p.target.setAttribute('style', 'opcity:0.7;pointer-events:none');
    let str=Array.from(state)
    str[v]=val
    setstate(str)
    setStatus(true)
    c()
    // check()

   
  }
  
 useEffect(()=>{
  //console.log(state)
  var a=document.getElementsByClassName("grid-item");
  var   wins=[[0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6] ];
    wins.forEach(e => {
      if(state[e[0]] == state[e[1]] &&  state[e[1]] == state[e[2]] && state[e[0]]!="" ){
        setStatus(false)
        console.log("win",state[e[1]] )
        alert(state[e[1]] )
       
    
      for(let i of a){
        i.setAttribute('style', 'opcity:0.7');
        console.log(i)
      }
      
    
        const n=["","","","","","","","",""]
        setstate(n)
        
      } 
    }
  
    );
    console.log(status)
    var a =[0,1,2,3,4,5,6,7,8];
   if(status !== false && state[0]!=="" && state[1]!==""   && state[2]!==""  && state[3]!==""  && state[4]!=="" && state[5]!=="" && state[6]!==""  && state[7]!==""  && state[8]!=="" ){
     alert("match is tie")
     const n=["","","","","","","","",""]
     for(let i of a){
      i.setAttribute('style', 'opcity:0.7');
      console.log(i)
    }
     setstate(n)
     
   }

 },[change])
    
  //  if(state[0]=="x" && state[1]=="x" && state[2]=="x"){
  //    console.log("win")
  //  }

  
  
  
  return (<>

 <div className='divcenter'>

 <div class="grid-container">
  <div id="one"  disabled={true}  class="grid-item" val={0} onClick={(e)=>change(e,0)}>{state[0]}</div>
  <div id="two" class="grid-item" value={1} onClick={(e)=>change(e,1)}>{state[1]}</div>
  <div id="three" class="grid-item" value={2} onClick={(e)=>change(e,2)}>{state[2]}</div>  
  <div id="four" class="grid-item" value={3} onClick={(e)=>change(e,3)}>{state[3]}</div>
  <div id="five" class="grid-item" onClick={(e)=>change(e,4)}>{state[4]}</div>
 
  <div id="six" class="grid-item" onClick={(e)=>change(e,5)}>{state[5]}</div>  
  <div id="seven" class="grid-item"onClick={(e)=>change(e,6)}>{state[6]}</div>
  <div id="eight" class="grid-item" onClick={(e)=>change(e,7)}>{state[7]}</div>
  <div id="nine" class="grid-item" onClick={(e)=>change(e,8)}>{state[8]}</div>  
</div>
 </div>
  



   
  </>
 
  )
}
