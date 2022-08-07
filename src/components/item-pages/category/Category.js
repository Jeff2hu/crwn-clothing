import React from 'react';

const Category = ({category}) => {
  const { title , imageUrl } = category;
  return (
    <div className='category-container'>
      <div 
        className="category-image" 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  )
}

export default Category