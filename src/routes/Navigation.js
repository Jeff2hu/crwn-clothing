import React, { Fragment,useContext } from 'react';
import { Outlet , Link } from 'react-router-dom';

import CartIcon from '../components/item-pages/cartIcon/CartIcon';
import CartDropdown from '../components/item-pages/cartIcon/CartDropdown';

import { ReactComponent as CrwnLogo } from '../assests/crown.svg';
import { signOutAuth } from '../utils/Firebase';

import { UserContext } from '../contexts/user/UserContext';
import { CartContext } from '../contexts/cart/CartContext';

const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='navigation-logo' to='/'>
          <CrwnLogo className='navigation-logo__logo'/>
        </Link>
        <div className='navigation-links'>
          <Link className='navigation-links__link' to='/shop'>
            <div>Shop</div>
          </Link>
          <Link className='navigation-links__link' to='/checkout'>
            <span>Checkout</span>
          </Link>
          {
            currentUser 
            ?(<Fragment>
                <Link 
                  className='navigation-links__link' 
                  to='/profile'
                >
                  <span>Profile</span>
                </Link>
                <Link 
                className='navigation-links__link' 
                to='/auth'
                onClick={signOutAuth}
                >
                <span>Sign Out</span>
                </Link>
              </Fragment>
            ) 
            :(<Fragment>
                <a></a>
                <Link className='navigation-links__link' to='/auth'>
                <span>Sign In</span>
                </Link>
              </Fragment>
            )
          }
          <a className='navigation-links__link'>
            <CartIcon />
          </a>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation