import React from 'react';
import { ReactComponent as Main } from '../../assets/svg/main.svg';
import * as S from './style';

export const BannerForm = () => {
  return (
    <S.BannerBox>
      <S.BnTextBox>
        <S.BnMainText>좋은 프로젝트의 시작</S.BnMainText>
        <S.BnSubText>CONNECT BRIDGE</S.BnSubText>
      </S.BnTextBox>
      <Main />
    </S.BannerBox>
  );
};
