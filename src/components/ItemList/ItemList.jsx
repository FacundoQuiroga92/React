import React from 'react'
import Item from '../Item/Item'
import classes from './ItemList.module.css'

const ItemList = ({ products }) => {
  return (
    <div className={classes.centrado}>
        {products.map(product => {
        return (
            <Item key={product.id} {...product} />   
        )
    })}


    </div>
  )
}

export default ItemList