import React from 'react'
import classes from './ItemListContainer.module.css'


const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className={classes.title}>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer