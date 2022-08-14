import React,{ useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../../assests/shopping-bag.svg';

import { CartContext } from '../../../contexts/cart/CartContext';

const CartIcon = () => {

  const {isCartOpen,setIsCartOpen,cartCountPrice} = useContext(CartContext);

  return (
    <div className='cartIcon' onClick={()=>{setIsCartOpen(!isCartOpen)}}>
      <ShoppingIcon className='cartIcon-shoppingIcon'/>
      <span className='cartIcon-count'>{cartCountPrice.count}</span>
    </div>
  )
}

export default CartIcon