import React, {useState} from 'react';

import FormInputComponent from '../form-input/form-input.component';
import ButtonComponent from '../button/button.component';

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
      <h2>I am already have an account</h2>
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
        <ButtonComponent type="submit">
          Sign in
        </ButtonComponent>
      </form>
    </div>
  );
};

export default SigninComponent;
