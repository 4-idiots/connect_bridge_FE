import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import axios from 'axios';
import { NavbarForm, FooterForm, BannerForm } from '../components/cRoutes';
import { useAuth } from '../contexts/hooks/useAuth';
import ReadOnlySlate from '../SlateEditor/ReadOnly';

export const Main = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const [test, setTest] = useState();

  // const getsome = async () => {
  //   try {
  //     const result = await axios.get('http://4idiot.ddns.net:8080/text/4');
  //     console.log(result.data.text);
  //     setTest(JSON.parse(result.data.text));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getsome();
  // }, []);

  return (
    <>
      <NavbarForm />
      <BannerForm />
      {test && <ReadOnlySlate value={test} />}
      {JSON.stringify(auth.token)}
      <br />
      {JSON.stringify(decodedToken)}
      <br />
      {JSON.stringify(isExpired)}
      <FooterForm />
    </>
  );
};
