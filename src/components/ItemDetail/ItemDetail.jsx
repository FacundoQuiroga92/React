import React from 'react'
import classes from './ItemDetail.module.css'

const ItemDetail = ({name, price, img, description}) => {
  return (
    <div className={classes.centrado}>
        <h2 className={classes.title}>{name}</h2>
        <img className={classes.img} src={img}  />
        <h3 className={classes.description}>${price}</h3>
        <h3 className={classes.description}>{description}</h3>
    </div>
  )
}

export default ItemDetail