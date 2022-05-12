import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelSuggest = () => {
  return (
    <S.suggestCardContainer>
      <S.suggestBox>
        <Skeleton width={104} height={64} />
        <S.suggestInfo>
          <S.suggestTop>
            <Skeleton width={100} />
            <S.suggestIconWrap>
              <Skeleton width={40} style={{ margin: '0 10px 0 2px' }} />
              <Skeleton width={40} />
            </S.suggestIconWrap>
          </S.suggestTop>
          <S.suggestMid>
            <Skeleton width={400} height={28} />
          </S.suggestMid>
          <S.suggestBottom>
            <S.newEveBox>
              <S.newreBox>
                <Skeleton width={60} style={{ marginTop: 10 }} />
              </S.newreBox>
            </S.newEveBox>
          </S.suggestBottom>
        </S.suggestInfo>
      </S.suggestBox>
    </S.suggestCardContainer>
  );
};
