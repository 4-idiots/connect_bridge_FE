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
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Main Page</h1>
      <FooterForm />
    </>
  );
};
