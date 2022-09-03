import React from "react";
import { Container,Name,Details } from './CartItem.style';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Details>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </Details>
    </Container>
  );
};

export default CartItem