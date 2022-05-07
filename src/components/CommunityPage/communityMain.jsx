/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiListCheck, BiSearchAlt2 } from 'react-icons/bi';

import PropTypes from 'prop-types';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Image,
  Content,
  Panel,
} from 'react-bulma-components';
import { Link, useParams } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';
import { Pagination } from '../../swr/Pagination';

export const CommunityForm = ({ commentCount, onActClick, hashtag }) => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const { teID } = useParams(`${decodedToken?.id}`);
  const offset = (page - 1) * limit;
  const [items, setItems] = useState();
  const [query, setquery] = useState('');
  const handleQuery = e => {
    setquery(e.target.value);
  };
  const handleButton = async () => {
    try {
      const res = await axios.get(
        `https://4idiot.ddns.net:8080/api/serach/${query}`,
        {
          params: {
            // eslint-disable-next-line object-shorthand
            query: query,
          },
        },
        window.location.replace(`/serach/${query}`),
      );
      if (res && res.status === 200) {
        const { data } = res;
        console.log(data);
        setItems(data.items);
      }
    } catch (e) {
      console.log('error ', e);
    }
  };
  useEffect(() => {
    fetch('https://4idiot.ddns.net:8080/api/community')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Newboard>
      <div>
        <Layout>
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <h1 style={{ marginTop: 80, fontWeight: 'bold' }}>
              전체 게시물 목록
            </h1>
            <br />
          </div>
        </Layout>
        <Boardtop>
          <Layout3>
            <Layout2>
              <a href="/community">전체</a>
            </Layout2>
            <Layout2>
              <a href="/community/popular">인기</a>
            </Layout2>
          </Layout3>
          <label>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </Boardtop>
        <Table0>
          <Table1>
            <Table2>
              <Table3>
                <col
                  className="size01"
                  data-alias="num"
                  style={{ width: '9%', display: 'tableColumn' }}
                />
                <col
                  className="size02"
                  data-alias="tit"
                  style={{ width: '56%', display: 'tableColumn' }}
                />
                <col
                  className="size03"
                  data-alias="wri"
                  style={{ width: '15%', display: 'tableColumn' }}
                />
                <col
                  className="size04"
                  data-alias="look"
                  style={{ width: '10%', display: 'tableColumn' }}
                />
                <col
                  className="size05"
                  data-alias="like"
                  style={{ width: '10%', display: 'tableColumn' }}
                />
              </Table3>
              <Ble1>
                <Ble2>
                  <Ble3>번호 </Ble3>
                  <Ble3>제목 </Ble3>
                  <Ble3>글쓴이 </Ble3>
                  <Ble3>조회수 </Ble3>
                  <Ble3>좋아요 </Ble3>
                </Ble2>
              </Ble1>

              <Bl1>
                {posts
                  .slice(offset, offset + limit)
                  .map(
                    ({
                      id,
                      postID,
                      title,
                      userNickname,
                      viewCount,
                      likeCount,
                      body,
                    }) => (
                      <Bl2 key={postID}>
                        <Bl3 style={{ fontSize: 'medium' }} className="size01">
                          {postID}
                        </Bl3>
                        <Bl3
                          style={{
                            fontSize: 'medium',
                          }}
                          className="size02"
                        >
                          {title}
                        </Bl3>
                        <Bl3 style={{ fontSize: 'medium' }} className="size03">
                          {userNickname}
                        </Bl3>
                        <Bl3 style={{ fontSize: 'medium' }} className="size04">
                          {viewCount}
                        </Bl3>
                        <Bl3 style={{ fontSize: 'medium' }} className="size05">
                          {likeCount}
                        </Bl3>
                      </Bl2>
                    ),
                  )}
              </Bl1>
            </Table2>
          </Table1>
        </Table0>
        <div
          style={{
            textalign: 'center',
            width: '160px',
            margin: '0 auto',
            display: 'flex',
          }}
        >
          <input
            type="search"
            className="form-control rounded"
            placeholder="검색 입력"
            onChange={handleQuery}
          />
          &nbsp;
          <button
            className="button is-pink"
            type="button"
            id="search_btn"
            onClick={handleButton}
          >
            검색
          </button>
        </div>
        <footer>
          <Pagination
            total={posts.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </Newboard>
  );
};

const Layout = styled.div`
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
`;
const Layout2 = styled.div`
  display: block;
  margin: 0 4px 0 0;
  padding: 0 10px 0 9px;
  height: 28px;
  float: left;
  background: #fff;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  line-height: 26px;
  border: 1px solid #aaa;
  border-radius: 3px;
  box-sizing: border-box;
`;
const Layout3 = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  display: block;
  float: none;
`;

const Newboard = styled.article`
  margin-top: 80px;
  max-width: 1152px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  box-sizing: inherit;
`;

const Boardtop = styled.div`
  display: flex;
  margin: 0;
  padding: 10px 13px;
  justify-content: space-between;
  background: #f5f5f5;
  border-top: 1px solid #000;
`;

const Table0 = styled.form`
  font-size: 13px;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
  float: none;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
`;
const Table1 = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  display: block;
  float: none;
  line-height: normal;
`;
const Table2 = styled.table`
  margin: 0 0 30px 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 13px;
  display: table;
  box-sizing: border-box;
  text-indent: initial;
  border-color: #ffffff;
`;
const Table3 = styled.colgroup`
  display: table-column-group;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 13px;
  text-indent: initial;
`;
const Ble1 = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  border-top-color: inherit;
  border-right-color: inherit;
  border-bottom-color: inherit;
  border-left-color: inherit;
`;

const Ble2 = styled.tr`
  text-align: center;
  border-bottom: 1px solid #ebebeb;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  border-top-color: inherit;
  border-right-color: inherit;
  border-left-color: inherit;
`;

const Ble3 = styled.td`
  padding: 8px 5px;
  vertical-align: middle;
  font-size: 20px;
  display: table-cell;
  font-weight: bold;
  border-color: #ffffff;
`;

const Bl1 = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  font-weight: bold;
`;

const Bl2 = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
`;
const Bl3 = styled.td`
  position: relative;
  padding: 8px 5px;
  text-align: center;
  vertical-align: middle;
  border-color: #ffffff;
  font-size: 13px;
  display: table-cell;
  text-indent: initial;
  line-height: normal;
`;
CommunityForm.propTypes = {
  commentCount: PropTypes.number,
  onActClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  hashtag: PropTypes.array,
};

CommunityForm.defaultProps = {
  commentCount: 0,

  onActClick: () => {
    console.log('hh');
  },
  hashtag: [''],
};
