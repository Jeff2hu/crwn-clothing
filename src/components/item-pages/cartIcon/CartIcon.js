import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../../assests/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className='cartIcon'>
      <ShoppingIcon className='cartIcon-shoppingIcon'/>
      <span className='cartIcon-count'>10</span>
    </div>
  )
}

export default CartIcon