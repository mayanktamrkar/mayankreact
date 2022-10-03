import React from 'react'
//import { useState } from 'react'
import { useContext } from 'react'
// import { Comp2 } from './Comp2'
import { F } from './App'
export const Test = () => {
  const {may,data}=useContext(F)
    
   


    


  return (
    <div>
    
    <h1  className='text-center '  onClick={may}>click</h1>
 


     <h1 className='text-center font-weight-bold  mt-10' >thats the data--{data}</h1>
         
    </div>
  )
}
