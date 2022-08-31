import { useState,createContext,useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/Firebase';

export const CategoryContext = createContext({
  categoriesMap:[]
})

export const CategoryProvider = ({children}) => {
  const [ categoriesMap,setCategoriesMap ] = useState({});

  useEffect(()=>{
    const getCategoriesMap = async() => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
  },[])

  const value ={categoriesMap};

  return(
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}