import React,{ useContext } from 'react'

import { CartContext } from '../contexts/cart/CartContext'

import CheckoutItem from '../components/item-pages/checkout/CheckoutItem'

const Checkout = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div className='checkout'>
      <div className="checkout-title">
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}
      <div className="checkout-total">
        <p>total : $</p>
      </div>
    </div>
  )
}

export default Checkout