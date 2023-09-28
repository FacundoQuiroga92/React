import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, total } = useCart()

  return (
    <>
        <h1>Carrito</h1>
        <section>
            {
                cart.map(prod => {
                    return(
                        <div key={prod.id}>
                            <h1>{prod.name}</h1>
                            <button onClick={()=> removeItem(prod.id)} >remove</button>
                        </div>
                    )
                })    
            }
        </section>
        <h2>total: ${total} </h2>
        <Link to='/checkout'>Check Out</Link>
    </>
  )
}
export default Cart;