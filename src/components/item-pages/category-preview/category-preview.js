import React from 'react'
import { Link } from 'react-router-dom'; 
import Product from '../product/Product'

const CategoryPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>
      <Link 
        className='category-preview-container-title'
        to={`${title}`}
      >
        {title.toUpperCase()}
      </Link>
      <div className='category-preview-container-preview'>
        {
          products
            .filter((item,index)=>index<4)
            .map((product)=><Product key={product.name} product={product}/>)
        }
      </div>
      <Link
        className='category-preview-container-footerTitle'
        to={`${title}`}
      >
        more...
      </Link>
    </div>
  )
}

export default CategoryPreview