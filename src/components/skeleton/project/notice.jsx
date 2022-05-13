import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelNotice = () => {
  return (
    <>
      <Skeleton width={60} height={30} style={{ marginBottom: 20 }} />
      <S.PSBox>
        <S.PSNull>
          <Skeleton />
        </S.PSNull>
      </S.PSBox>
      <S.NoticeUploadWrap style={{ height: 100 }} />
    </>
  );
};
