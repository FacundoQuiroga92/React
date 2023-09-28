import React, { useState } from 'react'
import classes from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../Notification/NotificationService'

const ItemDetail = ({id, name, price, img, description, stock}) => {
  const [quantity, setQuantity] = useState(0)
  const  { addItem }  = useCart()
   const { setNotification } = useNotification() 

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id, name, price, quantity
    }
    
    addItem(objProductToAdd)

    setNotification('se agrego algo al carrito')

    console.log('se agrega al carrito; ', quantity )
     
    setQuantity(quantity)
    
  }
  
  return (
    <div className={classes.centrado}>
        <h2 className={classes.title}>{name}</h2>
        <img className={classes.img} src={img}  />
        <h3 className={classes.description}>${price}</h3>
        <h3 className={classes.description}>{description}</h3>
        {
          quantity === 0? (
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
          ): (
            <Link to='/cart' >Finalizar compra</Link>
          )
        }
    </div>
  )
}

export default ItemDetail