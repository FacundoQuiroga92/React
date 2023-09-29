import React from 'react'
import Carrito from './assets/carritov2.png' 
import classes from './CartWidget.module.css'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  return (
   /*  <button onClick={() => navigate('/cart')} className={classes.borderBotton}>
        <img className={classes.Carrito} src={Carrito} />
        {totalQuantity}
    </button> */
    <div>
      <img onClick={() => navigate('/cart')} className={classes.Carrito} src={Carrito} />
      {totalQuantity !== 0 ? (
        <span className={classes.TotalQuantity}>{totalQuantity}</span>
      ) : null}
    </div>
  )
}

export default CartWidget