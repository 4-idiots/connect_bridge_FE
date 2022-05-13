import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelInfo = () => {
  return (
    <>
      <S.MPImgBox>
        <Skeleton width={130} height={130} />
        <Skeleton width={150} height={44} />
      </S.MPImgBox>
      <S.InfoBox>
        <Skeleton width={60} height={20} style={{ marginTop: 40 }} />
        <Skeleton height={30} />
        <Skeleton width={60} height={20} style={{ marginTop: 40 }} />
        <Skeleton height={30} />
        <Skeleton width={60} height={20} style={{ marginTop: 40 }} />
        <Skeleton height={30} />
        <Skeleton width={60} height={20} style={{ marginTop: 40 }} />
        <Skeleton height={30} />
        <Skeleton width={60} height={20} style={{ marginTop: 40 }} />
        <Skeleton height={30} />
      </S.InfoBox>
    </>
  );
};
