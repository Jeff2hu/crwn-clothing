import React,{ useContext } from 'react'
import { Container,Title,Block,Total } from './Checkout.style';

import { CartContext } from '../../contexts/cart/CartContext'
import CheckoutItem from '../../components/item-pages/checkout/CheckoutItem'

const Checkout = () => {

  const { cartItems,cartCountPrice } = useContext(CartContext)

  return (
    <Container>
      <Title>Shopping Cart Product</Title>
      {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}
      <Total>
        <p>TOTAL : ${cartCountPrice.price}</p>
      </Total>
    </Container>
  )
}

export default Checkout