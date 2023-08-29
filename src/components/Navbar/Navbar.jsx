import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Termo Manía</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          <a className="nav-link" href="#">Contacto</a>
          <a className="nav-link" href="#">Sobre Nosotros</a>
          <a className="nav-link " href="#">Catalogo</a>
        </div>
        <CartWidget/>
      </div>
    </div>
</nav>
    
  )
}

export default Navbar