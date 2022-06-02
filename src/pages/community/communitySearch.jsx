import React from 'react';
import * as C from '../../components/cRoutes';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const CommunitySearch = () => {
  return (
    <>
      <Mobile>
        <C.NavbarForm />
        <C.CommunitySearchForm />
        <C.FooterTabletForm />
      </Mobile>
      <Tablet>
        <C.NavbarForm />
        <C.CommunitySearchForm />
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
