import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import classes from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    useEffect(()=>{
        getProductsById(productId)
            .then(res => {
                setProduct(res)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [productId])

  return (
    <div className={classes.centrado}>
        <h1 className={classes.title} >Detalle De Producto</h1>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer