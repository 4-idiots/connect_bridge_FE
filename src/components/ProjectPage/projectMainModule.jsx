import React from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { ProjectCard } from './mainComponent/projectCard';
import { NewCard } from './mainComponent/newCard';
import * as S from './mainComponent/style';

export const ProjectMainForm = () => {
  return (
    <Container>
      <Heading>프로젝트 or 스터디</Heading>
      <Block
        style={{
          backgroundColor: '#fbfbfb',
          display: 'flex',
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
          />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              추천 프로젝트/스터디
            </Heading>
          </S.textWrap>
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 프로젝트/스터디</Heading>
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
      </Block>
      <Block>
        <Heading size={4}>여기에서 만들었어요</Heading>
      </Block>
    </Container>
  );
};
