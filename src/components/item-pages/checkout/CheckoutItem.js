import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart,negativeItemToCart,clearItemFromCart } from '../../../store/cart/cart.action';
import { selectCartItems } from '../../../store/cart/cart.selector';

import { Container,Image,Name,Quantity,Price,RemoveButton } from './CheckoutItem.style';


const CheckoutItem = ({item}) => {

  const { imageUrl, price, name, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  return (
    <Container>
      <Image>
        <img src={imageUrl} alt={`${name}`} />
      </Image>
      <Name> {name} </Name>
      <Quantity>
        <div onClick={()=>{dispatch(negativeItemToCart(cartItems,item))}}> &#10094; </div>
        <span>{quantity}</span>
        <div  onClick={()=>{dispatch(addItemToCart(cartItems,item))}}> &#10095; </div>
      </Quantity>
      <Price> {price}</Price>
      <RemoveButton onClick={()=>{dispatch(clearItemFromCart(cartItems,item))}}>
        &#10005;
      </RemoveButton>
    </Container>
  )
}

export default CheckoutItem