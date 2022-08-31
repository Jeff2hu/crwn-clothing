import React, { useContext,Fragment } from 'react';
import { CategoryContext } from '../contexts/shop/CategoryContext';
import CategoryPreview from '../components/item-pages/category-preview/category-preview';

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title)=>{
        const products = categoriesMap[title];
        return(
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </Fragment>
  )
}

export default CategoriesPreview