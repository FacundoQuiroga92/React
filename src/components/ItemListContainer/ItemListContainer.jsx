import React from 'react'
import classes from './ItemListContainer.module.css'
/* import { getProducts, getProductsByCategory } from '../../asyncMock' */
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from "../../services/firebase/firebaseConfig"

import { getDocs , collection, QuerySnapshot, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const productsRef = !categoryId 
      ? collection (db, 'products')
      : query(collection(db, 'products'), where('category','==',categoryId))

    getDocs(productsRef)
      .then(QuerySnapshot => {
        const productsAdapted = QuerySnapshot.docs.map(doc => {
          const fields = doc.data()
          
          return { id : doc.id, ...fields}
        })

        setProducts(productsAdapted)
      })
      .catch(error => {
        console.error(error)
      })
      

    /* const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result)
    })
      .catch(error =>{
        console.error(error)
      }) */
  },[categoryId]) 

  return (
    <div>
        <h1 className={classes.title}>{greeting}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer