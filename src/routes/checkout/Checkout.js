import React from 'react'
import { Container,Title,Total } from './Checkout.style';

import { useSelector } from 'react-redux';
import { selectCartPrice,selectCartItems } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/item-pages/checkout/CheckoutItem'

const Checkout = () => {

  const cartPrice = useSelector(selectCartPrice);
  const cartItems = useSelector(selectCartItems);

  return (
    <Container>
      <Title>Shopping Cart Product</Title>
      {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}
      <Total>
        <p>TOTAL : ${cartPrice}</p>
      </Total>
    </Container>
  )
}

export default Checkout