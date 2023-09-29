import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
const Cart = () => {
    const { cart, removeItem, total } = useCart()

  return (
    <>
        <h1 className={classes.title}>Carrito</h1>
        <section>
            {
                cart.map(prod => {
                    return(
                        <div  className={classes.container} key={prod.id}>
                            <h1>{prod.name}</h1>
                            <h3> cantidad: {prod.quantity}</h3>
                            <button className={classes.remove} onClick={()=> removeItem(prod.id)} >remove</button>
                        </div>
                    )
                })
                    
            }
            
        </section>
        <div className={classes.containerBtn}>
            <h2>Total: ${total} </h2>
            <button className={classes.btnCart}>
                <Link className={classes.link} to='/checkout'>Check Out</Link>
            </button>
        </div>
    </>
  )
}
export default Cart;