import ItemDetail from '../ItemDetail/ItemDetail'
import classes from './ItemDetailContainer.module.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    useEffect(()=>{

        const productRef = doc(db, 'products', productId)
        getDoc(productRef)
            .then(documentSnapshot => {
                
                const fields = documentSnapshot.data()
                const productAdapted = { id : documentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })

        /* getProductsById(productId)
            .then(res => {
                setProduct(res)
            })
            .catch(error =>{
                console.error(error)
            }) */
    }, [productId])

  return (
    <div className={classes.centrado}>
        <h1 className={classes.title} >Detalle De Producto</h1>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer