import React, { useState } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { NewCard } from './mainComponent/newCard';
import { SuggestCard } from './mainComponent/suggestCard';
import * as S from './mainComponent/style';
import { StudyInfinite } from '../../swr/studyInfinite';

export const StudyMainForm = () => {
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
  ]);

  return (
    <Container style={{ marginTop: 80 }}>
      <Heading>스터디</Heading>
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
              신규 스터디
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
              추천 스터디
            </Heading>
          </S.textWrap>
          <SuggestCard />
          <SuggestCard />
          <SuggestCard />
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 스터디</Heading>
        <S.gridBox>
          <StudyInfinite />
        </S.gridBox>
      </Block>
    </Container>
  );
};
