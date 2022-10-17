import React from 'react'
import {Link } from 'react-router-dom';
import './App.css';

export const Nav = () => {
  return (
    
    <div class="m">

        <div id="l">

    <p class="p1" id="p1"><Link to="/">Home</Link></p>
    <p> <Link to="/about">component1</Link></p>
    <p><Link to="/con">component2</Link></p>
    <p><Link to="/todo">ToDo</Link></p>
    <p><Link to="/mat">mat</Link></p>

   
    <p class="signup" id="signup1"><Link to="/cal">calculator</Link></p>

        </div>


</div>
  )
}
