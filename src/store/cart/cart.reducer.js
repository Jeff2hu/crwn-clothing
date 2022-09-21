import { cartActionType } from "./cart.types";

const initCart = {
  isCartOpen:false,
  cartItems:[],
}

export const cartReducer = (state = initCart,action) => {

  const { type,payload } = action;

  switch(type){
    case cartActionType.setCartItems:
      return{
        ...state,
        cartItems:payload
      }
    case cartActionType.setCartOpen:
      return{
        ...state,
        isCartOpen:payload
      }
    default:
      return state;
  }

}