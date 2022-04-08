import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button } from 'react-bulma-components';
import * as S from './style';

export const DetailRecurit = () => {
  return (
    <S.DetailStatus>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        모집 현황
      </Heading>
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>프로젝트 매니저</S.StatusBigP>
          <S.StatusSmallP>1/1</S.StatusSmallP>
          <Button color="danger">완료</Button>
        </S.StatusLi>
        <S.StatusLi>
          <S.StatusBigP>UI/UX디자인</S.StatusBigP>
          <S.StatusSmallP>0/1</S.StatusSmallP>
          <Button color="info">신청</Button>
        </S.StatusLi>
        <S.StatusLi>
          <S.StatusBigP>웹 서버</S.StatusBigP>
          <S.StatusSmallP>0/1</S.StatusSmallP>
          <Button color="info">신청</Button>
        </S.StatusLi>
        <S.StatusLi>
          <S.StatusBigP>크로스플랫폼</S.StatusBigP>
          <S.StatusSmallP>0/1</S.StatusSmallP>
          <Button color="info">신청</Button>
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};
