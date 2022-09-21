import React,{ useEffect } from 'react';
import { Routes,Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../utils/Firebase';

import CategoriesPreview from './Categories-preview';
import Shop_Category from './shop-category/Shop-Category';

import { setCategories } from '../store/category/category.action';


const Shop = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async() => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray)
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap();
  },[])
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Shop_Category />} />
    </Routes>
  )
}

export default Shop