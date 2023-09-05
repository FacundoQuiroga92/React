import React from 'react'
import classes from './ItemListContainer.module.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result)
    })
      .catch(error =>{
        console.error(error)
      })
  },[categoryId]) 

  return (
    <div>
        <h1 className={classes.title}>{greeting}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer