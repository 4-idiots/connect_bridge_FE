import React from 'react';
import * as C from '../../components/cRoutes';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const CommunityP = () => {
  return (
    <>
      <Mobile>
        <C.NavbarForm />
        <C.CommunityPForm />
        <C.FooterTabletForm />
      </Mobile>
      <Tablet>
        <C.NavbarForm />
        <C.CommunityPForm />
        <C.FooterTabletForm />
      </Tablet>
      <Desktop>
        <C.NavbarForm />
        <C.CommunityPForm />
        <C.FooterForm />
      </Desktop>
    </>
  );
};
