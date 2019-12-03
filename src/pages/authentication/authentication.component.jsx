import React from 'react';

import SigninComponent from '../../components/sign-in/signin.component';
import SignupComponent from '../../components/sign-up/signup.component';

import './authentication.styles.scss';

const AuthenticationPage = () => {
  return (
    <div className='authentication'>
      <SigninComponent />
      <SignupComponent />
    </div>
  );
};

export default AuthenticationPage;
