import React from 'react'
import Carrito from './assets/carrito.png' 
import classes from './CartWidget.module.css'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/cart')} className={classes.borderBotton}>
        <img className={classes.Carrito} src={Carrito} />
        {totalQuantity}
    </button>
  )
}

export default CartWidget