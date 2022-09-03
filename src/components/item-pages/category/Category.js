import React from 'react';
import { Container,BackgroundImage,Body } from './Category.style';

const Category = ({category}) => {

  let { title , imageUrl } = category;
  let newTitle = ""
  if(title==="Womens"){
    newTitle = "Women"
  }else if(title==="Mens"){
    newTitle = "Men"
  }else{
    newTitle=title
  }

  return (
    <Container to={`shop/${title.toLowerCase()}`}>
      <BackgroundImage ImageUrl={imageUrl}/>
      <Body>
        <h2>{newTitle}</h2>
        <p>Shop Now!</p>
      </Body>
    </Container>
  )
}

export default Category