import React,{useContext} from 'react';

import { CartContext } from '../../../contexts/cart/CartContext'

const CheckoutItem = ({item}) => {

  const { imageUrl, price, name, quantity } = item
  const { addItemToCart,negativeItemToCart,clearItemFromCart } = useContext(CartContext)

  return (
    <div className='checkoutItem-container'>
      <div className='checkoutItem-container-image'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='checkoutItem-container-name'> {name} </span>
      <span className='checkoutItem-container-quantity'>
        <div className='checkoutItem-container-quantity__arrow' onClick={()=>{negativeItemToCart(item)}}>
          &#10094;
        </div>
        <span className='checkoutItem-container-quantity__value'>{quantity}</span>
        <div className='checkoutItem-container-quantity__arrow' onClick={()=>{addItemToCart(item)}}>
          &#10095;
        </div>
      </span>
      <span className='checkoutItem-container-price'> {price}</span>
      <div className='checkoutItem-container-removebtn' onClick={()=>{clearItemFromCart(item)}}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem