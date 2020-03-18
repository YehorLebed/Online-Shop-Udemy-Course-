import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id='email'
            type='email'
            name='email'
            label='email'
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            id='password'
            type='password'
            name='password'
            label='password'
            value={password}
            required
            handleChange={this.handleChange}
          />

          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
      </div>
    )
  }
}