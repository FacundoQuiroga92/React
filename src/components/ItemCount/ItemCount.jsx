import React from 'react'
import classes from './ItemCount.module.css'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
      if (count > 1) setCount(prev => prev - 1)
    }
    const increment = () => {
      if(count < stock) setCount(prev => prev + 1)
    }
    
  return (
    <div className={classes.count}>
        <h4 className={classes.title}>{count}</h4>
        <button className={classes.decrement} onClick={decrement}> - </button>
        <button className={classes.agregar} onClick={() => onAdd(count) }>Agregar al carrito</button>
        <button className={classes.increment} onClick={increment}> + </button>
    </div>
  )
}

export default ItemCount