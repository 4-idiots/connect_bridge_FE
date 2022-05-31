import React from 'react';
import * as C from '../../components/cRoutes';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const Community = () => {
  return (
    <>
      <Mobile>
        <C.NavbarForm />
        <C.CommunityForm />
        <C.FooterTabletForm />
      </Mobile>
      <Tablet>
        <C.NavbarForm />
        <C.CommunityForm />
        <C.FooterTabletForm />
      </Tablet>
      <Desktop>
        <C.NavbarForm />
        <C.CommunityForm />
        <C.FooterForm />
      </Desktop>
    </>
  );
};
