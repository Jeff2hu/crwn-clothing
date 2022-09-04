import React, { Fragment,useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/item-pages/cartIcon/cartIcon/CartIcon';
import CartDropdown from '../../components/item-pages/cartIcon/cartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import { signOutAuth } from '../../utils/Firebase';

import { UserContext } from '../../contexts/user/UserContext';
import { CartContext } from '../../contexts/cart/CartContext';
import { Container,Logo,NavLinks,NavLink } from './navigation.style';

const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
      <Container>
        <Logo to='/crwn-clothing'>
          <CrwnLogo/>
        </Logo>
        <NavLinks>
          <NavLink to='/crwn-clothing/shop'>
            <div>Shop</div>
          </NavLink>
          <NavLink to='/crwn-clothing/checkout'>
            <span>Checkout</span>
          </NavLink>
          {currentUser 
            ?(<Fragment>
                <NavLink to='/crwn-clothing/profile'>
                  <span>Profile</span>
                </NavLink>
                <NavLink to='/crwn-clothing/auth' onClick={signOutAuth}>
                  <span>SignOut</span>
                </NavLink>
              </Fragment>
            ) 
            :(<Fragment>
                <NavLink to='/crwn-clothing/auth'>
                  <span>SignIn</span>
                </NavLink>
              </Fragment>
            )
          }
          <NavLink as="a">
            <CartIcon />
          </NavLink>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      <Outlet />
    </Fragment>
  )
}

export default Navigation