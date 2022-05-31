/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Container, Heading, Block, Form } from 'react-bulma-components';
import { StudyNew } from '../Style/Card/Use/StudyNew';
import { StudyCard } from '../Style/Card/Use/StudyCard';
import { StudySuggest } from '../Style/Card/Use/StudySuggest';
import * as S from './mainComponent/style';
import { StudyInfinite } from '../../swr/studyInfinite';
import {
  studyGetNewService,
  filterStudyService,
} from '../../services/studyService';
import { SkelProject, SkelSuggest, SkelNew } from '../skeleton/skelRouter';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';
import {
  areaArray,
  mainArray,
} from '../ProjectPage/uploadComponent/uploadValue';

export const StudyMainForm = () => {
  const [loading, setLoading] = useState(false);
  const [newStudy, setNewStudy] = useState(null);
  const [search, setSearch] = useState({
    area: '상관없음',
    field: '상관없음',
  });
  const [isFilter, setIsFilter] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getFilterData = async () => {
      try {
        const result = await filterStudyService(search.area, search.field);
        if (mounted) {
          setData(result.data);
        }
      } catch (error) {
        setData(null);
      }
    };
    getFilterData();
    return () => {
      mounted = false;
    };
  }, [search]);

  const searchHandler = e => {
    setIsFilter(true);
    setSearch({ ...search, [e.currentTarget.name]: e.currentTarget.value });
  };

  useEffect(() => {
    let mounted = true;
    const getData = async (setLoad, setDat, getFunc) => {
      setLoading(true);
      try {
        const result = await getFunc();
        if (mounted) {
          setDat(result.data);
          setLoad(false);
        }
      } catch (error) {
        setLoad(false);
      }
    };
    getData(setLoading, setNewStudy, studyGetNewService);
    return () => {
      mounted = false;
    };
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
                  신규 스터디
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
            <Heading style={{ marginLeft: 35, marginTop: 15 }} size={4}>
              전체 스터디
            </Heading>
            <div style={{ display: 'flex', marginLeft: 35, marginBottom: 15 }}>
              <Form.Field>
                <Form.Label>지역</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="area"
                    value={search.area}
                    onChange={searchHandler}
                  >
                    {areaArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>분야</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="field"
                    value={search.field}
                    onChange={searchHandler}
                  >
                    <option>상관없음</option>
                    {mainArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
            </div>
            <S.gridBoxMobile style={{ marginLeft: 45 }}>
              {isFilter ? (
                <>
                  {data ? (
                    data.map(item => (
                      <StudyCard key={item.studyID} item={item} />
                    ))
                  ) : (
                    <S.PSBox>
                      <S.PSNull>
                        <S.PSText>
                          해당 조건에 일치하는 정보가 없습니다.
                        </S.PSText>
                      </S.PSNull>
                    </S.PSBox>
                  )}
                </>
              ) : (
                <StudyInfinite />
              )}
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
                  신규 스터디
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
            <div style={{ display: 'flex', marginLeft: 55, marginBottom: 15 }}>
              <Form.Field>
                <Form.Label>지역</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="area"
                    value={search.area}
                    onChange={searchHandler}
                  >
                    {areaArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>분야</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="field"
                    value={search.field}
                    onChange={searchHandler}
                  >
                    <option>상관없음</option>
                    {mainArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
            </div>
            <S.gridBoxTablet style={{ marginLeft: 60 }}>
              {isFilter ? (
                <>
                  {data ? (
                    data.map(item => (
                      <StudyCard key={item.studyID} item={item} />
                    ))
                  ) : (
                    <S.PSBox>
                      <S.PSNull>
                        <S.PSText>
                          해당 조건에 일치하는 정보가 없습니다.
                        </S.PSText>
                      </S.PSNull>
                    </S.PSBox>
                  )}
                </>
              ) : (
                <StudyInfinite />
              )}
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
                  신규 스터디
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
            <div style={{ display: 'flex' }}>
              <Form.Field>
                <Form.Label>지역</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="area"
                    value={search.area}
                    onChange={searchHandler}
                  >
                    {areaArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>분야</Form.Label>
                <Form.Control>
                  <Form.Select
                    name="field"
                    value={search.field}
                    onChange={searchHandler}
                  >
                    <option>상관없음</option>
                    {mainArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
            </div>
            <S.gridBox>
              {isFilter ? (
                <>
                  {data ? (
                    data.map(item => (
                      <StudyCard key={item.studyID} item={item} />
                    ))
                  ) : (
                    <S.PSBox>
                      <S.PSNull>
                        <S.PSText>
                          해당 조건에 일치하는 정보가 없습니다.
                        </S.PSText>
                      </S.PSNull>
                    </S.PSBox>
                  )}
                </>
              ) : (
                <StudyInfinite />
              )}
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
              신규 스터디
            </Heading>
          </S.textWrap>
          <SkelNew />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              신규 스터디
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
