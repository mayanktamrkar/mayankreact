import React from 'react'
import { useEffect } from 'react';

export const Post = () => {
    useEffect(() => {
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/urlencoded' },
            body: JSON.stringify({ user: 'aman',pass:1234 })
        };
        fetch('http://localhost:8001/check', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id,data));
    
    
    }, []);


  return (
    <div>
        <h1>welcome</h1>



    </div>
  )
}
