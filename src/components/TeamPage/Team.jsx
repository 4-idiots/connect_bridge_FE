import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Image,
  Content,
} from 'react-bulma-components';
import { InfoForm } from './info';
import { TeamInfinite } from '../../swr/teamInfinite';

export const TeamForm = () => {
  const [poster, setPoster] = useState({});

  const { outID, check, title, image, link, view, like } = poster;

  const changePoster = (otitle, oimage, olink, oview, olike, ooutID) => {
    setPoster({
      ...poster,
      outID: ooutID,
      check: !check,
      title: otitle,
      image: oimage,
      link: olink,
      view: oview,
      like: olike,
    });
  };

  return (
    <Main>
      <div>
        <Head>
          <Head1>팀원 구하기</Head1>
        </Head>
        <Top1>
          <Top11>
            <Top111>지역</Top111>
          </Top11>
        </Top1>
        <br />
      </div>
      <People>
        <People1>
          <TeamInfinite outActClick={changePoster} />
        </People1>
      </People>
    </Main>
  );
};
const Main = styled.section`
  margin-top: 80px;
  max-width: 1152px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  box-sizing: inherit;
`;
const Head = styled.div`
  margin-block-start: 2.53em;
  margin-block-end: 1.53em;
  margin-inline-start: -50px;
  margin-inline-end: 0px;
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  font-weight: bold;
`;

const Head1 = styled.span`
  color: #42495b;
  font-size: 2rem;
`;

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
  margin-right: 10px;
  padding-left: 20px;
  background-image: url(/_next/static/media/ic_option_arrow.556e891….svg);
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
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const People1 = styled.ul`
  width: 100%;
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 40px;
  list-style: none;
`;
