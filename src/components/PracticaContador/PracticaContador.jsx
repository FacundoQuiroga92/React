import React, { useState, useRef, useEffect } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Este es un titulo')
    const h2Ref = useRef()

    const changeText = () => {
      console.log(h2Ref)
      h2Ref.current.innerHTML = 'Nuevo texto'
    }

    const recuperarTexto = () => {
      h2Ref.current.innerHTML = 'Primer texto'
    }

    useEffect(() => {
      document.title = 'Count:'+ count
    },[count])

  return (
    <div>
        <p>Aca utilizare ref</p>
        <h2 ref={h2Ref}>Primer texto</h2>
        <button onClick={changeText}>Cambiar texto</button>
        <button onClick={recuperarTexto}>Recuperar primer texto</button>

        <h1>{title}</h1>
        <button onClick={() => setTitle('Tu titulo ha cambiado para siempre')}>Cambiar titulo</button>
        <button onClick={() => setTitle('Este es un titulo')}>Volver al primer titulo</button>
        <p>`carrito: ${count}` </p>
        <h1>{count} </h1>
        <button onClick={() => setCount(count + 1)} >Incrementar</button>
        <button onClick={()=> setCount(count -1)} >Decrementar</button>
    </div>
  )
}

export default ItemCount