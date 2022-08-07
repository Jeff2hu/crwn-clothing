import React from 'react';

import Button from '../../item-components/Button';

const CartDropdown = () => {
  return (
    <div className='cartDropdown'>
      <div className="cartDropdown-items"></div>
      <Button buttonType={"inverted"}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropdown