import React from 'react';
import {
  LoginForm,
  NavbarForm,
  FooterForm,
  BannerForm,
} from '../../components/cRoutes';

export const Login = () => {
  return (
    <>
      <NavbarForm />
      <BannerForm />
      <LoginForm />
      <FooterForm />
    </>
  );
};
