import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';
import { SkelTeam } from '../team';

export const SkelApply = () => {
  return (
    <>
      <Skeleton width={60} height={30} style={{ marginBottom: 40 }} />
      <S.MemberGrid>
        <SkelTeam />
      </S.MemberGrid>
      <Skeleton width={60} height={30} style={{ margin: '40px 0 40px 0' }} />
      <S.MemberGrid>
        <SkelTeam />
      </S.MemberGrid>
    </>
  );
};
