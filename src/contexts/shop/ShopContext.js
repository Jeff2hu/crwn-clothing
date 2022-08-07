import { useState,createContext } from 'react';

import PRODUCT_DATA from '../../components/item-json/shop-data.json';

export const ShopContext = createContext({

})

export const ShopProvider = ({children}) => {

  const [ products,setProducts ] = useState(PRODUCT_DATA);
  const value ={products,setProducts};

  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}