import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { StudyNew } from '../Style/Card/Use/StudyNew';
import { StudySuggest } from '../Style/Card/Use/StudySuggest';
import * as S from './mainComponent/style';
import { StudyInfinite } from '../../swr/studyInfinite';
import { studyGetNewService } from '../../services/studyService';
import { SkelProject, SkelSuggest, SkelNew } from '../skeleton/skelRouter';
import { getData } from '../../RefactorFunc/dataControl';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const StudyMainForm = () => {
  const [loading, setLoading] = useState(false);
  const [newStudy, setNewStudy] = useState(null);

  useEffect(() => {
    getData(setLoading, setNewStudy, studyGetNewService);
  }, []);

  if (newStudy && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Mobile>
          <Heading style={{ marginLeft: 25 }}>스터디</Heading>
          <Block
            style={{
              flexDirection: 'column',
              backgroundColor: '#fbfbfb',
              display: 'flex',
              paddingTop: '0px',
              paddingRight: '20px',
              paddingBottom: '20px',
              paddingLeft: '20px',
              maxWidth: '1200px',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: '0px',
              marginRight: 'auto',
              marginBottom: '0px',
              marginLeft: 'auto',
            }}
          >
            <S.newWrap>
              <S.textWrap>
                <Heading
                  size={4}
                  style={{ fontWeight: 'bold', marginLeft: -20 }}
                >
                  인기 스터디
                </Heading>
              </S.textWrap>
              {newStudy[0].content && <StudyNew item={newStudy[0]} />}
            </S.newWrap>
            <S.ResSuggestWrap>
              <S.textWrap>
                <Heading
                  size={4}
                  style={{ fontWeight: 'bold', marginLeft: -20 }}
                >
                  신규 스터디
                </Heading>
              </S.textWrap>
              <StudySuggest item={newStudy[1]} />
              <StudySuggest item={newStudy[2]} />
              <StudySuggest item={newStudy[3]} />
            </S.ResSuggestWrap>
          </Block>
          <Block>
            <Heading style={{ marginLeft: 35 }} size={4}>
              전체 스터디
            </Heading>
            <S.gridBoxMobile style={{ marginLeft: 45 }}>
              <StudyInfinite />
            </S.gridBoxMobile>
          </Block>
        </Mobile>
        <Tablet>
          <Heading style={{ marginLeft: 35 }}>스터디</Heading>
          <Block
            style={{
              backgroundColor: '#fbfbfb',
              display: 'flex',
              paddingBottom: '30px',
              justifyContent: 'space-around',
            }}
          >
            <S.newWrap style={{ marginLeft: 45 }}>
              <S.textWrap>
                <Heading size={4} style={{ fontWeight: 'bold' }}>
                  인기 스터디
                </Heading>
              </S.textWrap>
              {newStudy[0].content && <StudyNew item={newStudy[0]} />}
            </S.newWrap>
            <S.ResSuggestWrap style={{ marginLeft: 45, marginRight: 45 }}>
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
            <Heading size={4} style={{ marginLeft: 45 }}>
              전체 스터디
            </Heading>
            <S.gridBoxTablet style={{ marginLeft: 60 }}>
              <StudyInfinite />
            </S.gridBoxTablet>
          </Block>
        </Tablet>
        <Desktop>
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
              {newStudy[0].content && <StudyNew item={newStudy[0]} />}
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
        </Desktop>
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
