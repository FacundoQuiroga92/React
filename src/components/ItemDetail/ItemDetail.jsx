import React from 'react'

const ItemDetail = ({name, price, img, description}) => {
  return (
    <div>
        <h2>{name}</h2>
        <img src={img} style={{width: 300}} />
        <h3>${price}</h3>
        <h3>{description}</h3>
    </div>
  )
}

export default ItemDetail