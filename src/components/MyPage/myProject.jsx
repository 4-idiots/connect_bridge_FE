import React, { useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as S from './projectStudy/style';

export const MyProjectForm = () => {
  const [project, setProject] = useState(null);

  return (
    <>
      <S.PSBox>
        <Heading size={4}>지원 현황</Heading>
        <S.PSNull>
          <S.PSText>지원한 프로젝트/스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
      <S.PSBox>
        <Heading size={4}>진행 현황</Heading>
        <S.PSNull>
          <S.PSText>진행중인 프로젝트/스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
      <S.PSBox>
        <Heading size={4}>완료 현황</Heading>
        <S.PSNull>
          <S.PSText>완료한 프로젝트/스터디가 없습니다.</S.PSText>
        </S.PSNull>
      </S.PSBox>
    </>
  );
};
