import React, { useContext } from 'react';

import { ShopContext } from '../contexts/shop/ShopContext';

import Product from '../components/item-pages/product/Product';

const Shop = () => {

  const { products } = useContext(ShopContext);

  return (
    <div className='products'>
      { products.map((product)=>{
        return <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Shop