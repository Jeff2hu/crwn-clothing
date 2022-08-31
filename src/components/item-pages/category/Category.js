import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
  const { title , imageUrl } = category;
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
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </Link>
  )
}

export default Category