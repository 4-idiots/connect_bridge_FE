import React from 'react';
import {
  FindIDForm,
  NavbarForm,
  FooterForm,
  BannerForm,
} from '../components/cRoutes';

export const FindID = () => {
  return (
    <>
      <NavbarForm />
      <BannerForm />
      <FindIDForm />
      <FooterForm />
    </>
  );
};
