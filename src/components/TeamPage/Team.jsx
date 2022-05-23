import React from 'react';
import { Container, Heading } from 'react-bulma-components';
import { TeamInfinite } from '../../swr/teamInfinite';
import * as S from './style';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const TeamForm = () => {
  return (
    <Container style={{ marginTop: 80 }}>
      <Mobile>
        <Heading style={{ marginLeft: 15 }}>팀원 구하기</Heading>
        <S.Top1Mobile>
          <S.Top11>
            <S.Top111>지역</S.Top111>
          </S.Top11>
        </S.Top1Mobile>
        <S.PeopleMobile style={{ marginLeft: 45 }}>
          <TeamInfinite />
        </S.PeopleMobile>
      </Mobile>
      <Tablet>
        <Heading style={{ marginLeft: 15 }}>팀원 구하기</Heading>
        <S.Top1Mobile>
          <S.Top11>
            <S.Top111>지역</S.Top111>
          </S.Top11>
        </S.Top1Mobile>
        <S.PeopleTablet style={{ marginLeft: 65 }}>
          <TeamInfinite />
        </S.PeopleTablet>
      </Tablet>
      <Desktop>
        <Heading>팀원 구하기</Heading>
        <S.Top1>
          <S.Top11>
            <S.Top111>지역</S.Top111>
          </S.Top11>
        </S.Top1>
        <S.People>
          <TeamInfinite />
        </S.People>
      </Desktop>
    </Container>
  );
};
