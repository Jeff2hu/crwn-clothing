import React from 'react';
import { Container,ShoppingIcon,Count } from './CartIcon.style'

import { useDispatch,useSelector } from 'react-redux';

import { selectIsCartOpen,selectCartCount } from '../../../../store/cart/cart.selector';
import { setIsCartOpen } from '../../../../store/cart/cart.action';

const CartIcon = () => {

  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <Container onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <Count>{cartCount}</Count>
    </Container>
  )
}

export default CartIcon