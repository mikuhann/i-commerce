import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AUTH } from '../../constants/routing';
import { firebaseAuth } from '../../firebase/firebase.utils';

import {
  HOME,
  SHOP,
  CONTACTS
} from '../../constants/routing';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './header.styles.scss';

const HeaderComponent = ({ currentUser }) => {
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
        {
          currentUser ?
            <div className='header-nav-link' onClick={() => firebaseAuth.signOut()}>
              Sign out
            </div> :
            <Link to={AUTH} className='header-nav-link'>
              Sign in
            </Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(HeaderComponent);
