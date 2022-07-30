import React from 'react';

const Category = ({category}) => {
  const { title , imageUrl } = category;
  return (
    <div className='category-container'>
      <div 
        className="category-container__image" 
        style={{backgroundImage:`url(${imageUrl})`}}
        />
      <div className="category-container__body">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  )
}

export default Category