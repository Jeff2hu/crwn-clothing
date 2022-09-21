import { createAction } from "../Reducer.utils";
import { cartActionType } from "./cart.types";

export const setIsCartOpen = (boolean) => createAction(cartActionType.setCartOpen,boolean)

const addCartItem = (cartItems,productsToAdd) => {
  // 辨識購物車清單裡是否已經有一樣的物品
  const existingCartItems = cartItems.find((cartItem)=>{
    return cartItem.id === productsToAdd.id
  }) 

  // 如果有,就把已有的物品數量+1
  
  if(existingCartItems){
    return cartItems.map((cartItem)=>{
      return(
        cartItem.id===productsToAdd.id
          ?{...cartItem,quantity:cartItem.quantity+1}
          :cartItem
      )
    })
  }

  // 如果沒有就要創造新的物品
  return[...cartItems,{...productsToAdd,quantity:1}]
}

const negativeCartItem = (cartItems,cartItemsToNegative) => {
  const existingCartItems = cartItems.find((cartItem)=>
    cartItem.id === cartItemsToNegative.id
  )

  if(existingCartItems){

    if(existingCartItems.quantity===1){
      alert("Removed!")
      return cartItems.filter((cartItem)=>cartItem.id!==cartItemsToNegative.id)
    }else{
      return cartItems.map((cartItem) => {
        return(
          cartItem.id===cartItemsToNegative.id
          ?{...cartItem,quantity:cartItem.quantity-1}
          :cartItem
        )
      })
    }
  }
}

const clearCartItem = (cartItems,cartItemsToClear) => cartItems.filter((cartItem)=>cartItem.id!==cartItemsToClear.id)


export const addItemToCart = (cartItems , productsToAdd) => {
  const newCartItems = addCartItem(cartItems,productsToAdd);
  return createAction(cartActionType.setCartItems, newCartItems);
}
export const negativeItemToCart = (cartItems , cartItemsToNegative) => {
  const newCartItems = negativeCartItem(cartItems,cartItemsToNegative);
  return createAction(cartActionType.setCartItems, newCartItems);
}
export const clearItemFromCart = (cartItems , cartItemsToClear) => {
  const newCartItems = clearCartItem(cartItems,cartItemsToClear);
  return createAction(cartActionType.setCartItems, newCartItems);
}