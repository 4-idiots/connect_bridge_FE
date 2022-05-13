import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelPlatform = () => {
  return (
    <S.DetailPlatform>
      <Skeleton width={140} height={36} />
      <S.PlatformWrap>
        <S.PlatformBox>
          <Skeleton width={64} height={64} style={{ margin: '20px 0 6px 0' }} />
          <Skeleton width={80} />
        </S.PlatformBox>
      </S.PlatformWrap>
    </S.DetailPlatform>
  );
};
