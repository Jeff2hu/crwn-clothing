import React, { Fragment,useContext } from 'react';
import { Outlet , Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../assests/crown.svg';
import { signOutAuth } from '../utils/Firebase';

import { UserContext } from '../contexts/user/UserContext';

const Navigation = () => {

  const {currentUser,setCurrentUser} = useContext(UserContext);

  const signOutHandler = async() => {
    await signOutAuth();
    setCurrentUser(null)
  }

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
                onClick={signOutHandler}
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation