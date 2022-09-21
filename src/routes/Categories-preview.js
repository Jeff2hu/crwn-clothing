import React, { Fragment } from 'react';
import CategoryPreview from '../components/item-pages/category-preview/category-preview';

import { categories_select } from '../store/category/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(categories_select)

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