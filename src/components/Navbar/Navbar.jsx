import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate()
  return (
           

    <nav className={`navbar navbar-expand-lg ${classes.nav}`}>
    <div className="container-fluid">
      <a onClick={()=> navigate('/')} className="navbar-brand" href="#"> <b>Termo Manía</b> </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-flex justify-content-evenly collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a onClick={()=> navigate('/')} className="nav-link active" aria-current="page" href="#">Inicio</a>
          <a onClick={()=> navigate('/category/termos')} className="nav-link" href="#">Termos</a>
          <a onClick={()=> navigate('/category/vasos')} className="nav-link" href="#">Vasos Termicos</a>
          
        </div>
        <CartWidget/>
      </div>
    </div>
  </nav>

    
  )
}

export default Navbar