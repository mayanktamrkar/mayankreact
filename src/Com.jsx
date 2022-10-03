import React from 'react'
import { useState } from 'react'

export const Com = () => {
  
    const[val,setval]=useState(1)
    let url=`https://jsonplaceholder.typicode.com/users?id=${val}`
    const [d,setd]=useState("")
    const fa=(e)=>{
        setval(e.target.value)
        f()
    }

    const f=()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => {console.log(json)
        setd(json)
    console.log(url)})
    }
  return (
      <>
    <button onClick={f}>data</button>
    <button value={1} onClick={fa}>data1</button>
    <button value={2} onClick={fa}>data2</button>
    <button value={3} onClick={fa}>data3</button>
    <button value={4} onClick={fa}>data4</button>
    <button value={5} onClick={fa}>data5</button>
    { d && d.map((data,key)=>{
       return <h1>{data.name}</h1>

    })}
    



     </>
  )
}
