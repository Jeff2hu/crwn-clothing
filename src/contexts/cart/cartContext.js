import { createContext,useState,useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  negativeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount:0
}) 

export const CartProvider = ({children}) => {

  const [ isCartOpen,setIsCartOpen ] = useState(false);
  const [ cartItems,setCartItems ] = useState([]);
  const [ cartCount,setCartCount ] = useState(0);

  useEffect(()=>{
    setCartCount(cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0))
  },[cartItems])

  const addItemToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems,productsToAdd))
  }
  const negativeItemToCart = (cartItemsToNegative) => {
    setCartItems(negativeCartItem(cartItems,cartItemsToNegative))
  }
  const clearItemFromCart = (cartItemsToClear) => {
    setCartItems(clearCartItem(cartItems,cartItemsToClear))
  }

  const value = { isCartOpen,setIsCartOpen,cartItems,addItemToCart,negativeItemToCart,clearItemFromCart,cartCount }

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}