import React from 'react';
import styled from 'styled-components';
import { Container, Heading } from 'react-bulma-components';
import { TeamInfinite } from '../../swr/teamInfinite';

export const TeamForm = () => {
  return (
    <Container style={{ marginTop: 80 }}>
      <Heading>팀원 구하기</Heading>
      <Top1>
        <Top11>
          <Top111>지역</Top111>
        </Top11>
      </Top1>
      <People>
        <TeamInfinite />
      </People>
    </Container>
  );
};

const Top1 = styled.div`
  display: flex;
  margin-top: 22px;
  margin-bottom: 0px;
  flex-direction: row;
`;

const Top11 = styled.select`
  max-width: 140px;
  width: 100%;
  border: 1px solid #bcbccb;
  border-radius: 4px;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 0.6875rem;
  color: #696980;
  margin: 0 10px 40px 0;
  padding-left: 20px;
  background-position: 90%;
  background-size: 10px 5px;
  background-repeat: no-repeat;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
`;

const Top111 = styled.option`
  font-family: Noto Sans KR, Lato, sans-serif;
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;

const People = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;
