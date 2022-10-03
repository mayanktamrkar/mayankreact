import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const [data,setdata]=useState({
        namee:"",
        rollno:"",
        branch:"",
        pass:""

    })
  
    const may=(e)=>{
        e.preventDefault()
        console.log(data)

    }

    const form=(e)=>{
        
        setdata({...data,[e.target.id]:e.target.value})
       
   

    }
  return (
    <div className='center'>
    <form>
    
       <input className='sa' placeholder='Enter your Name' id='namee' onChange={form} type='text'  />
       <br/>
    
       <input id='rollno' placeholder='Enter your roll no.' onChange={form} type='text'  />
       <br/>
       
       <input id='branch' placeholder='Branch and  year' onChange={form} type='text'  />
       <br/>
       
       <input id='pass' onChange={form} placeholder='Enter Password' type='password'  />
       <br/>

       <button className='but' onClick={may} >click</button>

    </form>


    </div>
  )
}
