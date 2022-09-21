import React, { Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/item-pages/cartIcon/cartIcon/CartIcon';
import CartDropdown from '../../components/item-pages/cartIcon/cartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import { signOutAuth } from '../../utils/Firebase';

import { Container,Logo,NavLinks,NavLink } from './navigation.style';
import { currentUser_select } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  
  const currentUser = useSelector(currentUser_select)
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <Container>
        <Logo to='/'>
          <CrwnLogo/>
        </Logo>
        <NavLinks>
          <NavLink to='shop'>
            <div>Shop</div>
          </NavLink>
          <NavLink to='checkout'>
            <span>Checkout</span>
          </NavLink>
          {currentUser 
            ?(<Fragment>
                <NavLink to='profile'>
                  <span>Profile</span>
                </NavLink>
                <NavLink to='auth' onClick={signOutAuth}>
                  <span>SignOut</span>
                </NavLink>
              </Fragment>
            ) 
            :(<Fragment>
                <NavLink to='auth'>
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