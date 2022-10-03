import React from 'react'
import './index.css'
import pic from './img/download.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';



export const Comp2 = (p) => {
  console.log("componet2")
  
    
  return (
  
    

 
    <div>
         <h1> this is component2</h1>
         <img  id='may' src={pic}></img>
         {/* <Button variant="primary">Primary</Button> */}
    
    </div>
  )
}
