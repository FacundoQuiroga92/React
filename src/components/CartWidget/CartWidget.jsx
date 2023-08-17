import React from 'react'
import Carrito from './assets/carrito.png' 
import classes from './CartWidget.module.css'

const CartWidget = () => {
  return (
    <button>
        <img className={classes.Carrito} src={Carrito} />
        0
    </button>
  )
}

export default CartWidget