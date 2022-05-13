import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelCommunity = () => {
  return (
    <S.CmContainer>
      <S.CmTextBox>
        <Skeleton width={600} height={30} style={{ marginBottom: 20 }} />
        <S.CmContentBox>
          <Skeleton width={600} height={30} />
        </S.CmContentBox>
        <S.CmHashTagBox style={{ display: 'flex' }}>
          <Skeleton width={40} height={20} />
          <Skeleton
            width={40}
            height={20}
            style={{ margin: '0 10px 0 10px' }}
          />
          <Skeleton width={40} height={20} />
        </S.CmHashTagBox>
      </S.CmTextBox>
      <S.CmEventBox>
        <S.CmCountBox>
          <S.CmIconWrap>
            <Skeleton width={60} height={30} />
          </S.CmIconWrap>
          <S.CmIconWrap>
            <Skeleton width={60} height={30} />
          </S.CmIconWrap>
          <S.CmIconWrap>
            <Skeleton width={60} height={30} />
          </S.CmIconWrap>
        </S.CmCountBox>
        <div style={{ display: 'flex' }}>
          <Skeleton width={50} height={40} style={{ marginRight: 20 }} />
          <Skeleton width={50} height={40} />
        </div>
      </S.CmEventBox>
    </S.CmContainer>
  );
};
