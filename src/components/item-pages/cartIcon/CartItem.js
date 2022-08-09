import React from "react";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cartItem-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='cartItem-container__details'>
        <span className='cartItem-container__details__name'>{name}</span>
        <span className='cartItem-container__details__price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem