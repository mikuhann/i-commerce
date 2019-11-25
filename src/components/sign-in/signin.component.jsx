import React, {useState} from 'react';

import FormInputComponent from '../form-input/form-input.component';
import ButtonComponent from '../button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss'

const SigninComponent = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className='sign-in'>
      <h2 className='sign-in-title'>I am already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitForm}>
        <FormInputComponent
          type='email'
          name='email'
          value={email}
          handleChange={onChange}
          label='Email'
          required />
        <FormInputComponent
          type='password'
          name='password'
          value={password}
          handleChange={onChange}
          label='Password'
          required />
        <div className='sign-in-buttons'>
          <ButtonComponent type="submit">
            Sign in
          </ButtonComponent>
          <ButtonComponent isGoogle onClick={signInWithGoogle}>
            Sign in with Google
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SigninComponent;
