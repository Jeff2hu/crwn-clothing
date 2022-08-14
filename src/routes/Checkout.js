import React,{ useContext } from 'react'

import { CartContext } from '../contexts/cart/CartContext'

import CheckoutItem from '../components/item-pages/checkout/CheckoutItem'

const Checkout = () => {

  const { cartItems,cartCountPrice } = useContext(CartContext)

  return (
    <div className='checkout'>
            <div className='checkout-title'>
        <div className='checkout-title__block'>
          <span>Product</span>
        </div>
        <div className='checkout-title__block'>
          <span>Description</span>
        </div>
        <div className='checkout-title__block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-title__block'>
          <span>Price</span>
        </div>
        <div className='checkout-title__block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}
      <div className="checkout-total">
        <p>TOTAL : ${cartCountPrice.price}</p>
      </div>
    </div>
  )
}

export default Checkout