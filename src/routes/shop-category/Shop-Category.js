import React,{ useState,useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/item-pages/product/Product';

import { Container,Title } from './Shop-Category.style';

import { categories_select } from '../../store/category/category.selector';
import { useSelector } from 'react-redux';


const Shop_Category = () => {
  
  const categoriesMap = useSelector(categories_select)
  const { category } = useParams();
  const [ products,setProducts ] = useState();
  
  let newTitle = ""
  if(category==="womens"){
    newTitle = "women"
  }else if(category==="mens"){
    newTitle = "men"
  }else{
    newTitle = category
  }

  useEffect(()=>{
    setProducts(categoriesMap[category])
  },[category,categoriesMap])

  return (
    <Fragment>
      <Title>{newTitle.toUpperCase()}</Title>
      <Container>
        {
          products && products.map((product)=>{
            return(
              <Product key={product.id} product={product} />
            )
          })
        }
      </Container>
    </Fragment>

  )
}

export default Shop_Category