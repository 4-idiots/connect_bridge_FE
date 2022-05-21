import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { NewCard } from './mainComponent/newCard';
import { SuggestCard } from './mainComponent/suggestCard';
import * as S from './mainComponent/style';
import { ProjectInfinite } from '../../swr/projectInfinite';
import { projectGetNewService } from '../../services/projectService';
import { SkelProject, SkelSuggest, SkelNew } from '../skeleton/skelRouter';

export const ProjectMainForm = () => {
  const [loading, setLoading] = useState(true);
  const [newPr, setNewPr] = useState(null);

  useEffect(() => {
    const getNewAxios = async () => {
      setLoading(true);
      try {
        const result = await projectGetNewService();
        setNewPr(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getNewAxios();
  }, []);

  if (newPr && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Heading>프로젝트</Heading>
        <Block
          style={{
            backgroundColor: '#fbfbfb',
            display: 'flex',
            paddingBottom: '30px',
            justifyContent: 'space-around',
          }}
        >
          <S.newWrap>
            <S.textWrap>
              <Heading size={4} style={{ fontWeight: 'bold' }}>
                인기 프로젝트
              </Heading>
            </S.textWrap>
            {newPr[0].content && <NewCard item={newPr[0]} />}
          </S.newWrap>
          <S.ResSuggestWrap>
            <S.textWrap>
              <Heading size={4} style={{ fontWeight: 'bold' }}>
                신규 프로젝트
              </Heading>
            </S.textWrap>
            <SuggestCard item={newPr[1]} />
            <SuggestCard item={newPr[2]} />
            <SuggestCard item={newPr[3]} />
          </S.ResSuggestWrap>
        </Block>
        <Block>
          <Heading size={4}>전체 프로젝트</Heading>
          <S.gridBox>
            <ProjectInfinite />
          </S.gridBox>
        </Block>
      </Container>
    );
  }
  return (
    <Container style={{ marginTop: 80 }}>
      <Heading>프로젝트</Heading>
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
              관심 프로젝트
            </Heading>
          </S.textWrap>
          <SkelNew />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              추천 프로젝트
            </Heading>
          </S.textWrap>
          {[0, 1, 2].map(item => (
            <SkelSuggest key={item} />
          ))}
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 프로젝트</Heading>
        <S.gridBox>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(item => (
            <SkelProject key={item} />
          ))}
        </S.gridBox>
      </Block>
    </Container>
  );
};
