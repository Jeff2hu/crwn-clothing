import React from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector';
import { addItemToCart } from '../../../store/cart/cart.action';

import Button,{ button_class_type } from '../../item-components/button/Button';
import { Container,Footer,Name,Price } from './Product.style';

const Product = ({product}) => {
  
  const { name,imageUrl,price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

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