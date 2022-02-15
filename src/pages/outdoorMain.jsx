import React from 'react';
import {
  OutdoorMainForm,
  NavbarForm,
  FooterForm,
  BannerForm,
} from '../components/cRoutes';

export const OutdoorMain = () => {
  return (
    <>
      <NavbarForm />
      <BannerForm />
      <OutdoorMainForm />
      <FooterForm />
    </>
  );
};
