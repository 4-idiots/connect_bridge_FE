import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { NewCard } from './mainComponent/newCard';
import { SuggestCard } from './mainComponent/suggestCard';
import * as S from './mainComponent/style';
import { ProjectInfinite } from '../../swr/projectInfinite';
import { projectGetNewService } from '../../services/projectService';

export const ProjectMainForm = () => {
  const [newPr, setNewPr] = useState(null);

  useEffect(() => {
    const getNewAxios = async () => {
      try {
        const result = await projectGetNewService();
        setNewPr(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewAxios();
  }, []);

  if (newPr) {
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
            {newPr[0].content && <NewCard item={newPr[0]} />}
          </S.newWrap>
          <S.suggestWrap>
            <S.textWrap>
              <Heading size={4} style={{ fontWeight: 'bold' }}>
                추천 프로젝트
              </Heading>
            </S.textWrap>
            <SuggestCard item={newPr[1]} />
            <SuggestCard item={newPr[2]} />
            <SuggestCard item={newPr[3]} />
          </S.suggestWrap>
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
  return null;
};
