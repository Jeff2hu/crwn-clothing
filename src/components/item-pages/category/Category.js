import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link 
      className='category-container'
      to={`shop/${title.toLowerCase()}`}
    >
      <div 
        className="category-image" 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
      <div className="category-body">
        <h2>{newTitle}</h2>
        <p>Shop Now!</p>
      </div>
    </Link>
  )
}

export default Category