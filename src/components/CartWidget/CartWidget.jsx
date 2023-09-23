import React from 'react'
import Carrito from './assets/carrito.png' 
import classes from './CartWidget.module.css'
import { useCart } from '../context/CartContext'

const CartWidget = () => {

  const { totalQuantity } = useCart()

  return (
    <button className={classes.borderBotton}>
        <img className={classes.Carrito} src={Carrito} />
        {totalQuantity}
    </button>
  )
}

export default CartWidget