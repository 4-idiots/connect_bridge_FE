/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Container, Heading, Form } from 'react-bulma-components';
import { TeamInfinite } from '../../swr/teamInfinite';
import * as S from './style';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';
import {
  areaArray,
  mainArray,
} from '../ProjectPage/uploadComponent/uploadValue';
import { filterTeamService } from '../../services/teamService';
import { TeamCard } from '../Style/Card/Use/TeamCard';

export const TeamForm = () => {
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
        const result = await filterTeamService(search.area, search.field);
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

  return (
    <Container style={{ marginTop: 80 }}>
      <Mobile>
        <Heading style={{ marginLeft: 15 }}>팀원 구하기</Heading>
        <div style={{ display: 'flex' }}>
          <Form.Field style={{ marginLeft: 20 }}>
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

        <S.PeopleMobile style={{ marginLeft: 45, marginTop: 45 }}>
          {isFilter ? (
            <>
              {data.length !== 0 ? (
                data.map(item => <TeamCard key={item.myid} item={item} />)
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>해당 조건에 일치하는 정보가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </>
          ) : (
            <TeamInfinite />
          )}
        </S.PeopleMobile>
      </Mobile>
      <Tablet>
        <Heading style={{ marginLeft: 15 }}>팀원 구하기</Heading>
        <div style={{ display: 'flex' }}>
          <Form.Field style={{ marginLeft: 40 }}>
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
        <S.PeopleTablet style={{ marginLeft: 65 }}>
          {isFilter ? (
            <>
              {data.length !== 0 ? (
                data.map(item => <TeamCard key={item.myid} item={item} />)
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>해당 조건에 일치하는 정보가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </>
          ) : (
            <TeamInfinite />
          )}
        </S.PeopleTablet>
      </Tablet>
      <Desktop>
        <Heading>팀원 구하기</Heading>
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
        <S.People>
          {isFilter ? (
            <>
              {data.length !== 0 ? (
                data.map(item => <TeamCard key={item.myid} item={item} />)
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>해당 조건에 일치하는 정보가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </>
          ) : (
            <TeamInfinite />
          )}
        </S.People>
      </Desktop>
    </Container>
  );
};
