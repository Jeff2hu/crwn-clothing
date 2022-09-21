import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { button_class_type } from '../../../item-components/button/Button';
import { Container,EmptyMessage,Items } from './CartDropdown.style';
import CartItem from '../cartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../../store/cart/cart.selector';

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('checkout')
  }

  return (
    <Container>
      <Items>
      {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </Items>
      <Button
        buttonType={button_class_type.base}
        buttonOptions={{
          onClick:goToCheckoutHandler
        }}>Go To Checkout</Button>
    </Container>
  )
}

export default CartDropdown