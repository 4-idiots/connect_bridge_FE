import React from 'react';
import { useJwt } from 'react-jwt';
import {
  NavbarForm,
  FooterForm,
  BannerForm,
  MainPageForm,
} from '../../components/cRoutes';
import { useAuth } from '../../contexts/hooks/useAuth';

export const Main = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);

  return (
    <>
      <NavbarForm />
      <BannerForm />
      <MainPageForm />
      <FooterForm />
    </>
  );
};
