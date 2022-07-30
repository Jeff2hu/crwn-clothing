import React, { Fragment } from 'react';
import { Outlet , Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../assests/crown.svg';

const Navigation = () => {
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
          <Link className='navigation-links__link' to='/auth'>
            <div>SignIn</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation