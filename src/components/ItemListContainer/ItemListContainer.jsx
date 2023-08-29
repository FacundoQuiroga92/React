import React from 'react'
import classes from './ItemListContainer.module.css'
import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(result => {
      console.log(result)
      setProducts(result)
    })
  },[]) 

  return (
    <div>
        <h1 className={classes.title}>{greeting}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer