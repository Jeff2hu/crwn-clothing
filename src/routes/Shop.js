import React from 'react';
import { Routes,Route } from "react-router-dom";

import CategoriesPreview from './Categories-preview';
import Shop_Category from './shop-category/Shop-Category';


const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Shop_Category />} />
    </Routes>
  )
}

export default Shop