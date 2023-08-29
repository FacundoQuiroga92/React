import React from 'react'


const Item = ( {name, img, price}) => {
  return (
    <div >
        <h3>{name}</h3>
        <img src={img} style={{ width : 200}}/>
        <p>Precio: USD {price}</p>
        <button style={{borderRadius: 10, backgroundColor:'grey'}}>Ver detalles</button>
    </div>
  )
}

export default Item