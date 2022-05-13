import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelRecruit = () => {
  return (
    <S.DetailStatus>
      <Skeleton width={100} height={36} />
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>
            <Skeleton width={140} height={24} style={{ marginBottom: 20 }} />
            <Skeleton width={140} height={24} style={{ marginBottom: 20 }} />
            <Skeleton width={140} height={24} style={{ marginBottom: 20 }} />
          </S.StatusBigP>
          <S.StatusSmallP>
            <Skeleton width={40} height={24} style={{ marginBottom: 20 }} />
            <Skeleton width={40} height={24} style={{ marginBottom: 20 }} />
            <Skeleton width={40} height={24} style={{ marginBottom: 20 }} />
          </S.StatusSmallP>
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};
