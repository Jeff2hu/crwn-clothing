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
        <Link className='navigation-logo' to='/crwn-clothing/'>
          <CrwnLogo className='navigation-logo__logo'/>
        </Link>
        <div className='navigation-links'>
          <Link className='navigation-links__link' to='/crwn-clothing/shop'>
            <div>Shop</div>
          </Link>
          {
            currentUser 
            ?(<Fragment>
                <Link 
                  className='navigation-links__link' 
                  to='/crwn-clothing/profile'
                >
                  <span>Profile</span>
                </Link>
                <Link 
                className='navigation-links__link' 
                to='/crwn-clothing/auth'
                onClick={signOutAuth}
                >
                <span>Sign Out</span>
                </Link>
              </Fragment>
            ) 
            :(<Link className='navigation-links__link' to='/crwn-clothing/auth'>
              <span>Sign In</span>
              </Link>
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