import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelNew = () => {
  return (
    <S.newCardContainer>
      <S.newImg>
        <Skeleton width={516} height={230} />
      </S.newImg>
      <S.newBottom>
        <Skeleton width={80} />
        <Skeleton width={180} />
        <div style={{ width: '500px', overflow: 'hidden', height: '28px' }}>
          <Skeleton />
        </div>
        <S.newInfoBox>
          <S.newEveBox>
            <S.newreBox>
              <Skeleton width={80} />
            </S.newreBox>
          </S.newEveBox>
          <S.newIconBox>
            <Skeleton width={40} />
            <Skeleton width={40} />
          </S.newIconBox>
        </S.newInfoBox>
      </S.newBottom>
    </S.newCardContainer>
  );
};
