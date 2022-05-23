import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { NewCard } from './mainComponent/newCard';
// import { SuggestCard } from './mainComponent/suggestCard';
import { StudySuggest } from '../Style/Card/Use/StudySuggest';
import * as S from './mainComponent/style';
import { StudyInfinite } from '../../swr/studyInfinite';
import { studyGetNewService } from '../../services/studyService';
import { SkelProject, SkelSuggest, SkelNew } from '../skeleton/skelRouter';
import { getData } from '../../RefactorFunc/dataControl';

export const StudyMainForm = () => {
  const [loading, setLoading] = useState(false);
  const [newStudy, setNewStudy] = useState(null);

  useEffect(() => {
    getData(setLoading, setNewStudy, studyGetNewService);
  }, []);

  if (newStudy && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Heading>스터디</Heading>
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
                인기 스터디
              </Heading>
            </S.textWrap>
            {newStudy[0].content && <NewCard item={newStudy[0]} />}
          </S.newWrap>
          <S.ResSuggestWrap>
            <S.textWrap>
              <Heading size={4} style={{ fontWeight: 'bold' }}>
                신규 스터디
              </Heading>
            </S.textWrap>
            <StudySuggest item={newStudy[1]} />
            <StudySuggest item={newStudy[2]} />
            <StudySuggest item={newStudy[3]} />
          </S.ResSuggestWrap>
        </Block>
        <Block>
          <Heading size={4}>전체 스터디</Heading>
          <S.gridBox>
            <StudyInfinite />
          </S.gridBox>
        </Block>
      </Container>
    );
  }
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
              관심 스터디
            </Heading>
          </S.textWrap>
          <SkelNew />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              추천 스터디
            </Heading>
          </S.textWrap>
          {[0, 1, 2].map(item => (
            <SkelSuggest key={item} />
          ))}
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 스터디</Heading>
        <S.gridBox>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(item => (
            <SkelProject key={item} />
          ))}
        </S.gridBox>
      </Block>
    </Container>
  );
};
