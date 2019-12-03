import React, { useState } from 'react';

import FormInputComponent from '../form-input/form-input.component';
import ButtonComponent from '../button/button.component';

import { firebaseAuth, createUserProfile } from '../../firebase/firebase.utils';

import './siginup.styles.scss';

const SignupComponent = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = user;

  const onChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log(`passwords don't match`);
      return;
    }

    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);

      await createUserProfile(user, { displayName });

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      console.error(e.message);
    }
  };


  return (
    <div className='sign-up'>
      <h2 className='sign-up-title'>I do not have a account</h2>
      <span>Sign in with your email and password</span>
      <form className='sign-up-form' onSubmit={ submitForm }>
        <FormInputComponent
          type='text'
          label='Display Name'
          handleChange={ onChange }
          name='displayName'
          value={ displayName }
          required />
        <FormInputComponent
          type='email'
          label='Email'
          handleChange={ onChange }
          name='email'
          value={ email }
          required />
        <FormInputComponent
          type='password'
          label='Password'
          handleChange={ onChange }
          name='password'
          value={ password }
          required />
        <FormInputComponent
          type='password'
          label='Confirm password'
          handleChange={ onChange }
          name='confirmPassword'
          value={ confirmPassword }
          required />
        <ButtonComponent type='submit'>
          Sign up
        </ButtonComponent>
      </form>
    </div>
  );
};

export default SignupComponent;
