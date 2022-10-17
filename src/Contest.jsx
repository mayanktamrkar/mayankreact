import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Mat from './mat';





export const Contest = () => {
  const user = {
    name: 'Hedy',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  


  return (
    <>
      <Routes>
      <Route path="/mat" element ={ <Mat/>} />
      </Routes>
    <div classsName="con">
   
    <div className='c'>
      
  
      <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      </div>
     <div>
     <p>mayank tamrkar</p>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, tempora?</p>
     </div>
     

        
    </div>
    </div>
    </>
  )
}
