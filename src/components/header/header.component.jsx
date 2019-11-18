import React from 'react';
import { Link } from 'react-router-dom';

import {
  HOME,
  SHOP,
  CONTACTS
} from '../../constants/routing';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './header.styles.scss';

const HeaderComponent = () => {
  return (
    <div className='header'>
      <Link className='header-logo' to={HOME}>
        <Logo className='logo' />
      </Link>
      <div className='header-nav'>
        <Link className='header-nav-link' to={SHOP}>
          Shop
        </Link>
        <Link className='header-nav-link' to={CONTACTS}>
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
