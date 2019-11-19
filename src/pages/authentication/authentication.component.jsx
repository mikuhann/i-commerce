import React from 'react';

import SigninComponent from '../../components/sign-in/signin.component';

import './authentication.styles.scss';

const AuthenticationPage = () => {
  return (
    <div className='authentication'>
      <SigninComponent />
    </div>
  );
};

export default AuthenticationPage;
