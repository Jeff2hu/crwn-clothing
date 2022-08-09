import React,{ useContext } from 'react';

import { CartContext } from '../../../contexts/cart/CartContext';

import Button from '../../item-components/Button';
import CartItem from './CartItem';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div className='cartDropdown'>
      <div className="cartDropdown-items">
      {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button buttonType={"inverted"}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropdown