import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { ProjectCard } from './mainComponent/projectCard';
import { NewCard } from './mainComponent/newCard';
import { SuggestCard } from './mainComponent/suggestCard';
import * as S from './mainComponent/style';

export const ProjectMainForm = () => {
  const [a, setA] = useState([
    {
      type: 'paragaph',
      children: [
        { text: '프로젝트를 소' },
        { text: '개 하자면....asdasd', bold: true },
      ],
    },
    {
      type: 'paragaph',
      children: [
        { text: 'a', color: '#a10000', bold: true },
        { color: '#a10000', text: 'sdasd' },
      ],
    },
    { type: 'paragaph', children: [{ text: 'asdasd', color: '#a10000' }] },
    { type: 'blockquote', children: [{ text: 'asdas' }] },
    { type: 'paragaph', children: [{ text: 'das', underline: true }] },
    { type: 'paragaph', children: [{ text: 'dasd' }] },
    { type: 'paragaph', children: [{ text: 'asd' }] },
  ]);

  return (
    <Container>
      <Heading>프로젝트 or 스터디</Heading>
      <Block
        style={{
          backgroundColor: '#fbfbfb',
          display: 'flex',
          paddingBottom: '30px',
        }}
      >
        <S.newWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              신규 프로젝트
            </Heading>
          </S.textWrap>
          <NewCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
            prContent={a}
          />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              추천 프로젝트/스터디
            </Heading>
          </S.textWrap>
          <SuggestCard />
          <SuggestCard />
          <SuggestCard />
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 프로젝트/스터디</Heading>
        <S.gridBox>
          <ProjectCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
          />
          <ProjectCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
          />
          <ProjectCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
          />
          <ProjectCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
          />
          <ProjectCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
          />
        </S.gridBox>
      </Block>
      <Block>
        <Heading size={4}>여기에서 만들었어요</Heading>
      </Block>
    </Container>
  );
};
