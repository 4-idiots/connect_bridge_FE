import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelHeader = () => {
  return (
    <S.HeaderWrap>
      <S.HeaderContent>
        <Skeleton width={160} height={40} />
        <Skeleton width={400} height={40} style={{ margin: 24 }} />
        <S.LeaderWrap>
          <Skeleton width={160} height={40} />
          <Skeleton />
        </S.LeaderWrap>
        <S.StatusBox>
          <Skeleton width={60} height={30} style={{ marginRight: 24 }} />
          <Skeleton width={60} height={30} />
        </S.StatusBox>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};
