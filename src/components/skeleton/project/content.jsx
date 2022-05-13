import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelContent = () => {
  return (
    <S.DetailContent>
      <Skeleton width={60} height={36} />
      <Skeleton style={{ marginTop: 30 }} height={36} />
    </S.DetailContent>
  );
};
