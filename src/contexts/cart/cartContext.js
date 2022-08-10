import { createContext,useState,useEffect } from "react";

const checkProductRepeat = (cartItems,productsToAdd) => {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
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
    setCartItems(checkProductRepeat(cartItems,productsToAdd))
  }

  const value = { isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount }

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}