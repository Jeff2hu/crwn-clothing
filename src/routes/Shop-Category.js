import React,{ useContext,useState,useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../components/item-pages/product/Product';
import { CategoryContext } from '../contexts/shop/CategoryContext';

const Shop_Category = () => {
  
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [ products,setProducts ] = useState();
  
  useEffect(()=>{
    setProducts(categoriesMap[category])
  },[category,categoriesMap])

  return (
    <Fragment>
      <h2 style={{fontSize:"36px",textAlign:"center"}}>{category.toUpperCase()}</h2>
      <div className='shop-category-container'>
        {
          products && products.map((product)=>{
            return(
              <Product key={product.id} product={product} />
            )
          })
        }
      </div>
    </Fragment>

  )
}

export default Shop_Category