import React from "react"
import { useState, createContext,useContext } from "react"

//creamos el context
const CartContext = createContext('esto se ve fuera')



export const CartProvider = ({children}) => {
    const [cart , setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        }else{
            console.error('ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod =>{
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }
    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod =>{
            total+= prod.quantity * prod.price
        })
        return total
    }
    const total = getTotal()

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id != id)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{total ,cart, addItem, totalQuantity, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

//usamos el context y lo exportamos para poder ser usado en otros componentes
export const useCart = () => {
    return useContext(CartContext)
}

  