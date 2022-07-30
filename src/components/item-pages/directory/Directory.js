import React from 'react';
import Category from '../../item-components/Category';

const Directory = ({category}) => {
  return (
    <div className='directory-categories'>
      {category.map((category)=>{
        return <Category key={category.id} category={category}/>
      })}
    </div>

  )
}

export default Directory