import React from 'react'
import { useState } from 'react'
import classes from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
      if (count > 1) setCount(prev => prev - 1)
    }
    const increment = () => {
      if(count < stock) setCount(prev => prev + 1)
    }
 
  return (
    <div>
        <h4 className={classes.title}>{count}</h4>
        <button onClick={decrement}> - </button>
        <button onClick={() => onAdd(count) }>Agregar al carrito</button>
        <button onClick={increment}> + </button>
    </div>
  )
}

export default ItemCount