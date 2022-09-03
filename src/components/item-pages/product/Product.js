import React,{ useContext } from 'react';

import { CartContext } from '../../../contexts/cart/CartContext';

import Button,{ button_class_type } from '../../item-components/button/Button';
import { Container,Footer,Name,Price } from './Product.style';

const Product = ({product}) => {
  
  const { name,imageUrl,price } = product;
  const { addItemToCart } = useContext(CartContext)
  
  const addProductToCart = () => addItemToCart(product);

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button 
        buttonType={button_class_type.inverted}
        buttonOptions={{
          onClick:addProductToCart
        }
        }>Add to card</Button>
    </Container>
  )
}

export default Product