import React from 'react'
import { Container,Title,Preview,FooterTitle } from './category-preview.style';
import Product from '../product/Product'


const CategoryPreview = ({title,products}) => {

  console.log(title)
  let newTitle = ""
  if(title==="womens"){
    newTitle = "women"
  }else if(title==="mens"){
    newTitle = "men"
  }else{
    newTitle=title
  }

  return (
    <Container>
      <Title to={`${title}`}>
        {newTitle.toUpperCase()}
      </Title>
      <Preview>
        {
          products
            .filter((item,index)=>index<4)
            .map((product)=><Product key={product.name} product={product}/>)
        }
      </Preview>
      <FooterTitle  to={`${title}`}>
        more...
      </FooterTitle>
    </Container>
  )
}

export default CategoryPreview