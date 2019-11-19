import React, {useState} from 'react';

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
        <input
          type='email'
          name='email'
          value={email}
          onChange={onChange} required />
        <label>Email</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange} required />
        <label>Password</label>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  );
};

export default SigninComponent;
