import React from 'react'

const CheckoutItem = ({item}) => {

  const { imageUrl, price, name, quantity } = item

  return (
    <div className='checkoutItem-container'>
      <div className="checkoutItem-container__details">
        <img src={imageUrl} alt={`${name}`} />
        <span>{name}</span>
        <span>{quantity}</span>
        <span>{quantity*price}</span>
        <span>X</span>
      </div>
    </div>
  )
}

export default CheckoutItem