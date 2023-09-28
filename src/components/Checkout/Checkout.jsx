import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from '../../services/firebase/firebaseConfig'
import { useCart } from "../context/CartContext";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import Swal from 'sweetalert2'

const Checkout = () => {
    /* const objOrder =  {
        buyer:{
            name: 'facundo',
            phone:'154964540',
            email: 'contacto@gmail.com'
        },
        items : [],
        total : 123
    } */

    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useCart()

    const createOrder = async( {name, phone, email} ) =>{
        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                item:cart,
                total:total,
            }
            const batch = writeBatch(db)
            const outOfStock=[]
            const ids = cart.map(prod => prod.id)
            const productsRef= collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find( prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{ stock: stockDb - prodQuantity })
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()

                //alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
          
                  Toast.fire({
                    icon: 'success',
                    title: 'Compra exitosa en breve obtendra su ID de orden'
                  })

            } else {
                /* console.error('hay productos sin stock') */
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'hay producto fuera de stock',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }

        } catch(error){
            console.error( 'ocurrio un error : '+error)
        }
    }

    if(orderId){
        return <h1> su numero de orden es : ${orderId}</h1>
    }

    return (
        <>
            <h1>Checkout - Complete con sus datos </h1>
            <CheckoutForm onConfirm={createOrder} />
        </>
    )
}

export default Checkout