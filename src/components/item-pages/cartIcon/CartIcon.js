import React,{ useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../../assests/shopping-bag.svg';

import { CartContext } from '../../../contexts/cart/cartContext';

const CartIcon = () => {

  const {isCartOpen,setIsCartOpen} = useContext(CartContext);

  return (
    <div className='cartIcon' onClick={()=>{setIsCartOpen(!isCartOpen)}}>
      <ShoppingIcon className='cartIcon-shoppingIcon'/>
      <span className='cartIcon-count'>10</span>
    </div>
  )
}

export default CartIcon