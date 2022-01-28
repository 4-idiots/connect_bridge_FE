import React from 'react';
import { Hero } from 'react-bulma-components';
import { LoginForm, NavbarForm, FooterForm } from '../components/cRoutes';

export const Login = () => {
  return (
    <Hero color="pink">
      <NavbarForm />
      <LoginForm />
      <FooterForm />
    </Hero>
  );
};
