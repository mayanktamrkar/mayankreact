
import React from 'react'
import { useState,useEffect } from 'react'



export const Fetch = () => {
  const [items,setItems]=useState("")

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(
        (result) => {
       
          setItems(result);
        
        },
   
        (error) => {
          console.log(error)
        
        }
      )
  }, [])

  return (
    <div>
       
   
       <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
         
        </tr>
        {items && items.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.title}</td>
           
            </tr>
          )
        })}
      </table>



    </div>
  )
}
