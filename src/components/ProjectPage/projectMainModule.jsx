/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Container, Heading, Block, Form } from 'react-bulma-components';
import { ProjectSuggest } from '../Style/Card/Use/ProjectSuggest';
import { ProjectNew } from '../Style/Card/Use/ProjectNew';
import * as S from './mainComponent/style';
import { ProjectInfinite } from '../../swr/projectInfinite';
import {
  projectGetNewService,
  filterProjectService,
} from '../../services/projectService';
import { SkelProject, SkelSuggest, SkelNew } from '../skeleton/skelRouter';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';
import { areaArray, checekArray } from './uploadComponent/uploadValue';
import { ProjectCard } from '../Style/Card/Use/ProjectCard';

export const ProjectMainForm = () => {
  const [loading, setLoading] = useState(true);
  const [newPr, setNewPr] = useState(null);
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
        const result = await filterProjectService(search.area, search.field);
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
      setLoad(true);
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
    getData(setLoading, setNewPr, projectGetNewService);
    return () => {
      mounted = false;
    };
  }, []);

  if (newPr && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Mobile>
          <Heading style={{ marginLeft: 25 }}>프로젝트</Heading>
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
            <S.newWrapMobile>
              <S.textWrap>
                <Heading
                  size={4}
                  style={{ fontWeight: 'bold', marginLeft: -20 }}
                />
              </S.textWrap>
              {newPr[0].content && <ProjectNew item={newPr[0]} />}
            </S.newWrapMobile>
            <S.ResSuggestWrapMobile>
              <S.textWrap>
                <Heading
                  size={4}
                  style={{ fontWeight: 'bold', marginLeft: -20 }}
                />
              </S.textWrap>
              <ProjectSuggest item={newPr[1]} />
              <ProjectSuggest item={newPr[2]} />
              <ProjectSuggest item={newPr[3]} />
            </S.ResSuggestWrapMobile>
          </Block>
          <Block>
            <Heading size={4} style={{ marginLeft: 30, marginTop: 15 }}>
              전체 프로젝트
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
                    {checekArray.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </Form.Select>
                </Form.Control>
              </Form.Field>
            </div>
            <S.gridBoxMobile style={{ marginLeft: 45 }}>
              {isFilter ? (
                <>
                  {data &&
                    data.map(item => (
                      <ProjectCard key={item.projectID} item={item} />
                    ))}
                </>
              ) : (
                <ProjectInfinite />
              )}
            </S.gridBoxMobile>
          </Block>
        </Mobile>
        <Tablet>
          <Heading style={{ marginLeft: 35 }}>프로젝트</Heading>
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
                <Heading size={4} style={{ fontWeight: 'bold' }} />
              </S.textWrap>
              {newPr[0].content && <ProjectNew item={newPr[0]} />}
            </S.newWrap>
            <S.ResSuggestWrap style={{ marginLeft: 45, marginRight: 45 }}>
              <S.textWrap>
                <Heading size={4} style={{ fontWeight: 'bold' }} />
              </S.textWrap>
              <ProjectSuggest item={newPr[1]} />
              <ProjectSuggest item={newPr[2]} />
              <ProjectSuggest item={newPr[3]} />
            </S.ResSuggestWrap>
          </Block>
          <Block>
            <Heading size={4} style={{ marginLeft: 45 }}>
              전체 프로젝트
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
                    {checekArray.map(item => (
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
                      <ProjectCard key={item.projectID} item={item} />
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
                <ProjectInfinite />
              )}
            </S.gridBoxTablet>
          </Block>
        </Tablet>
        <Desktop>
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
                <Heading size={4} style={{ fontWeight: 'bold' }} />
              </S.textWrap>
              {newPr[0].content && <ProjectNew item={newPr[0]} />}
            </S.newWrap>
            <S.ResSuggestWrap>
              <S.textWrap>
                <Heading size={4} style={{ fontWeight: 'bold' }} />
              </S.textWrap>
              <ProjectSuggest item={newPr[1]} />
              <ProjectSuggest item={newPr[2]} />
              <ProjectSuggest item={newPr[3]} />
            </S.ResSuggestWrap>
          </Block>
          <Block>
            <Heading size={4}>전체 프로젝트</Heading>
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
                    {checekArray.map(item => (
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
                      <ProjectCard key={item.projectID} item={item} />
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
                <ProjectInfinite />
              )}
            </S.gridBox>
          </Block>
        </Desktop>
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
            <Heading size={4} style={{ fontWeight: 'bold' }} />
          </S.textWrap>
          <SkelNew />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }} />
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
