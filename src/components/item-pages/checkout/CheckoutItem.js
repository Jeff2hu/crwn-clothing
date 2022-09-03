import React,{useContext} from 'react';
import { Container,Image,Name,Quantity,Price,RemoveButton } from './CheckoutItem.style';
import { CartContext } from '../../../contexts/cart/CartContext'

const CheckoutItem = ({item}) => {

  const { imageUrl, price, name, quantity } = item
  const { addItemToCart,negativeItemToCart,clearItemFromCart } = useContext(CartContext)

  return (
    <Container>
      <Image>
        <img src={imageUrl} alt={`${name}`} />
      </Image>
      <Name> {name} </Name>
      <Quantity>
        <div onClick={()=>{negativeItemToCart(item)}}> &#10094; </div>
        <span>{quantity}</span>
        <div  onClick={()=>{addItemToCart(item)}}> &#10095; </div>
      </Quantity>
      <Price> {price}</Price>
      <RemoveButton onClick={()=>{clearItemFromCart(item)}}>
        &#10005;
      </RemoveButton>
    </Container>
  )
}

export default CheckoutItem