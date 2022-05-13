import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';
import {
  SkelProject,
  SkelTeam,
  SkelCommunity,
  SkelOutdoor,
} from '../skelRouter';

export const SkelSubscribe = () => {
  return (
    <>
      <Skeleton width={100} height={40} style={{ marginBottom: 40 }} />
      <S.SubGrid>
        <SkelProject />
        <SkelProject />
      </S.SubGrid>
      <Skeleton width={100} height={40} style={{ marginBottom: 40 }} />
      <S.SubGrid>
        <SkelTeam />
        <SkelTeam />
      </S.SubGrid>
      <Skeleton width={100} height={40} style={{ marginBottom: 40 }} />
      <S.SubGrid>
        <SkelCommunity />
        <SkelCommunity />
      </S.SubGrid>
      <Skeleton width={100} height={40} style={{ marginBottom: 40 }} />
      <S.SubGrid>
        <SkelOutdoor />
        <SkelOutdoor />
      </S.SubGrid>
      <Skeleton width={100} height={40} style={{ marginBottom: 40 }} />
      <S.SubGrid>a</S.SubGrid>
    </>
  );
};
