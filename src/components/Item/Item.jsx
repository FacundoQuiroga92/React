import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Item.module.css'

const Item = ( {id, name, img, price}) => {
  const navigate = useNavigate()
  
  return (
    <div className={classes.itemContainer}>
        <h3 className={classes.title}>{name}</h3>
        <img className={classes.img} src={img} />
        <p className={classes.description}>Precio: USD {price}</p>
        <button className={classes.bottonCatalogo} onClick={()=>navigate(`/item/${id}`)} >Ver detalles</button>
    </div>
  )
}

export default Item