import React from 'react';
import { Hero } from 'react-bulma-components';
import { FindPWForm, NavbarForm, FooterForm } from '../components/cRoutes';

export const FindPW = () => {
  return (
    <Hero>
      <NavbarForm />
      <FindPWForm />
      <FooterForm />
    </Hero>
  );
};
