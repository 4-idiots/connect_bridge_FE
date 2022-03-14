import React from 'react';
import { useJwt } from 'react-jwt';
import { NavbarForm, FooterForm, BannerForm } from '../components/cRoutes';
import { useAuth } from '../contexts/hooks/useAuth';

export const Main = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);

  return (
    <>
      <NavbarForm />
      <BannerForm />
      {JSON.stringify(auth.token)}
      <br />
      {JSON.stringify(decodedToken)}
      <br />
      {JSON.stringify(isExpired)}
      <FooterForm />
    </>
  );
};
