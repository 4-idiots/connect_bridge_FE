import React from 'react';
import { Container, Heading } from 'react-bulma-components';
import { TeamInfinite } from '../../swr/teamInfinite';
import * as S from './style';

export const TeamForm = () => {
  return (
    <Container style={{ marginTop: 80 }}>
      <Heading>팀원 구하기</Heading>
      <S.Top1>
        <S.Top11>
          <S.Top111>지역</S.Top111>
        </S.Top11>
      </S.Top1>
      <S.People>
        <TeamInfinite />
      </S.People>
    </Container>
  );
};
