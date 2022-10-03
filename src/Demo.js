import React from 'react'
import {Link} from 'react-router-dom';

export default function Demo() {
  return (
<>
<nav  class="navbar navbar-expand-lg   bg-primary text-light  rounded">


  <div class="container-fluid">
    <Link  class="navbar-brand" to="/">Mayank</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          
        <Link class="nav-link" to="/">Home </Link>
        <Link class="nav-link" to="/con">component2</Link>
        <Link class="nav-link" to="/about">Tic</Link>
       
        <Link class="nav-link" to="/cal">Calculator</Link>
        <Link class="nav-link" to="/todo">Todo</Link>
        <Link class="nav-link " to='/fetch'>Fetch</Link>
        <Link class="nav-link " to='/form'>Form</Link>
      </div>
      
    </div>
  </div>
</nav>

</>
    )
}
