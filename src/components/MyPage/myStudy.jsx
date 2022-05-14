import React from 'react';
import { Heading } from 'react-bulma-components';
import * as S from './projectStudy/style';

export const MyStudyForm = () => {
  return (
    <>
      <S.PSBox>
        <Heading size={4}>지원 현황</Heading>
        <S.PSNull>
          <S.PSText>지원한 스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
      <S.PSBox>
        <Heading size={4}>진행 현황</Heading>
        <S.PSNull>
          <S.PSText>진행중인 스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
      <S.PSBox>
        <Heading size={4}>완료 현황</Heading>
        <S.PSNull>
          <S.PSText>완료한 스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
    </>
  );
};
