import React,{ useContext } from 'react';
import { Container,ShoppingIcon,Count } from './CartIcon.style'

import { CartContext } from '../../../../contexts/cart/CartContext';


const CartIcon = () => {

  const {isCartOpen,setIsCartOpen,cartCountPrice} = useContext(CartContext);

  return (
    <Container onClick={()=>{setIsCartOpen(!isCartOpen)}}>
      <ShoppingIcon/>
      <Count>{cartCountPrice.count}</Count>
    </Container>
  )
}

export default CartIcon