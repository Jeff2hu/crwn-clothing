import React,{ useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../../contexts/cart/CartContext';

import Button from '../../item-components/Button';
import CartItem from './CartItem';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

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
      <Button 
        buttonOptions={{
          onClick:goToCheckoutHandler
        }}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropdown