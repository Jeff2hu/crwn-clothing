import React from 'react';

import Button from '../../item-components/Button';

const Product = ({product}) => {
  
  const {name,imageUrl,price} = product;

  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="product-footer">
        <span className='product-footer__name'>{name}</span>
        <span className='product-footer__price'>{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  )
}

export default Product