import React,{ useContext,useState,useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/item-pages/product/Product';

import { Container,Title } from './Shop-Category.style';
import { CategoryContext } from '../../contexts/shop/CategoryContext';


const Shop_Category = () => {
  
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [ products,setProducts ] = useState();
  
  let newTitle = ""
  if(category==="womens"){
    newTitle = "women"
  }else if(category==="mens"){
    newTitle = "men"
  }else{
    newTitle=category
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