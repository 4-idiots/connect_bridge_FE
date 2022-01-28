import React from 'react';
import { Hero } from 'react-bulma-components';
import { FindIDForm, NavbarForm, FooterForm } from '../components/cRoutes';

export const FindID = () => {
  return (
    <Hero>
      <NavbarForm />
      <FindIDForm />
      <FooterForm />
    </Hero>
  );
};
