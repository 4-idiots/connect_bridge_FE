import React, { useState, useEffect } from 'react';
import { Button } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';
import { Pagination } from '../../swr/Pagination';
import { getAllCommunity } from '../../services/communityService';
import * as S from './mainStyle';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const CommunityForm = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const offset = (page - 1) * limit;
  const [query, setquery] = useState('');

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await getAllCommunity();
        setPosts(result.data);
      } catch (error) {
        // pass
      }
    };
    getAxios();
  }, []);

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      navigate(`/search/${query}`);
    }
  };

  return (
    <S.Newboard>
      <Mobile>
        <div>
          <S.Layout>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <h1 style={{ marginTop: 130, fontWeight: 'bold' }}>
                전체 게시물 목록
              </h1>
              <br />
              <div style={{ textAlign: 'right' }}>
                {decodedToken ? (
                  <Button
                    color="danger"
                    size="small"
                    renderAs={Link}
                    to="/community/write"
                  >
                    글쓰기
                  </Button>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </S.Layout>
          <S.Boardtop>
            <S.Layout3>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community">
                  전체
                </a>
              </S.Layout2>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community/popular">
                  인기
                </a>
              </S.Layout2>
            </S.Layout3>
            <span>
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
            </span>
          </S.Boardtop>
          <S.Table0>
            <S.Table1>
              <S.Table2>
                <S.Table3>
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
                </S.Table3>
                <S.Ble1>
                  <S.Ble2>
                    <S.Ble3>번호 </S.Ble3>
                    <S.Ble3>제목 </S.Ble3>
                    <S.Ble3>글쓴이 </S.Ble3>
                    <S.Ble3>조회수 </S.Ble3>
                    <S.Ble3>좋아요 </S.Ble3>
                  </S.Ble2>
                </S.Ble1>
                <S.Bl1>
                  {posts
                    .slice(offset, offset + limit)
                    .map(
                      ({
                        postID,
                        title,
                        userNickname,
                        viewCount,
                        likeCount,
                        commentCount,
                      }) => (
                        <S.Bl2 style={{ cursor: 'pointer' }} key={postID}>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size01"
                          >
                            {postID}
                          </S.Bl3>
                          <S.Bl3
                            style={{
                              fontSize: 'medium',
                            }}
                            className="size02"
                          >
                            <Link
                              style={{ color: 'black' }}
                              to={`/community/info/${postID}`}
                            >
                              {title}{' '}
                              <span style={{ color: 'red' }}>
                                ({commentCount})
                              </span>
                            </Link>
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size03"
                          >
                            {userNickname}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size04"
                          >
                            {viewCount}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size05"
                          >
                            {likeCount}
                          </S.Bl3>
                        </S.Bl2>
                      ),
                    )}
                </S.Bl1>
              </S.Table2>
            </S.Table1>
          </S.Table0>
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
              onChange={e => setquery(e.target.value)}
              onKeyPress={onKeyPress}
            />
            &nbsp;
            <button
              className="button is-pink"
              type="button"
              id="search_btn"
              onClick={() => navigate(`/search/${query}`)}
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
      </Mobile>
      <Tablet>
        <div>
          <S.Layout>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <h1 style={{ marginTop: 130, fontWeight: 'bold' }}>
                전체 게시물 목록
              </h1>
              <br />
              <div style={{ textAlign: 'right' }}>
                {decodedToken ? (
                  <Button
                    color="danger"
                    size="small"
                    renderAs={Link}
                    to="/community/write"
                  >
                    글쓰기
                  </Button>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </S.Layout>
          <S.Boardtop>
            <S.Layout3>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community">
                  전체
                </a>
              </S.Layout2>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community/popular">
                  인기
                </a>
              </S.Layout2>
            </S.Layout3>
            <span>
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
            </span>
          </S.Boardtop>
          <S.Table0>
            <S.Table1>
              <S.Table2>
                <S.Table3>
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
                </S.Table3>
                <S.Ble1>
                  <S.Ble2>
                    <S.Ble3>번호 </S.Ble3>
                    <S.Ble3>제목 </S.Ble3>
                    <S.Ble3>글쓴이 </S.Ble3>
                    <S.Ble3>조회수 </S.Ble3>
                    <S.Ble3>좋아요 </S.Ble3>
                  </S.Ble2>
                </S.Ble1>
                <S.Bl1>
                  {posts
                    .slice(offset, offset + limit)
                    .map(
                      ({
                        postID,
                        title,
                        userNickname,
                        viewCount,
                        likeCount,
                        commentCount,
                      }) => (
                        <S.Bl2 style={{ cursor: 'pointer' }} key={postID}>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size01"
                          >
                            {postID}
                          </S.Bl3>
                          <S.Bl3
                            style={{
                              fontSize: 'medium',
                            }}
                            className="size02"
                          >
                            <Link
                              style={{ color: 'black' }}
                              to={`/community/info/${postID}`}
                            >
                              {title}{' '}
                              <span style={{ color: 'red' }}>
                                ({commentCount})
                              </span>
                            </Link>
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size03"
                          >
                            {userNickname}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size04"
                          >
                            {viewCount}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size05"
                          >
                            {likeCount}
                          </S.Bl3>
                        </S.Bl2>
                      ),
                    )}
                </S.Bl1>
              </S.Table2>
            </S.Table1>
          </S.Table0>
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
              onChange={e => setquery(e.target.value)}
            />
            &nbsp;
            <button
              className="button is-pink"
              type="button"
              id="search_btn"
              onClick={() => navigate(`/search/${query}`)}
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
      </Tablet>
      <Desktop>
        <div>
          <S.Layout>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <h1 style={{ marginTop: 130, fontWeight: 'bold' }}>
                전체 게시물 목록
              </h1>
              <br />
              <div style={{ textAlign: 'right' }}>
                {decodedToken ? (
                  <Button
                    color="danger"
                    size="small"
                    renderAs={Link}
                    to="/community/write"
                  >
                    글쓰기
                  </Button>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </S.Layout>
          <S.Boardtop>
            <S.Layout3>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community">
                  전체
                </a>
              </S.Layout2>
              <S.Layout2>
                <a style={{ color: 'black' }} href="/community/popular">
                  인기
                </a>
              </S.Layout2>
            </S.Layout3>
            <span>
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
            </span>
          </S.Boardtop>
          <S.Table0>
            <S.Table1>
              <S.Table2>
                <S.Table3>
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
                </S.Table3>
                <S.Ble1>
                  <S.Ble2>
                    <S.Ble3>번호 </S.Ble3>
                    <S.Ble3>제목 </S.Ble3>
                    <S.Ble3>글쓴이 </S.Ble3>
                    <S.Ble3>조회수 </S.Ble3>
                    <S.Ble3>좋아요 </S.Ble3>
                  </S.Ble2>
                </S.Ble1>
                <S.Bl1>
                  {posts
                    .slice(offset, offset + limit)
                    .map(
                      ({
                        postID,
                        title,
                        userNickname,
                        viewCount,
                        likeCount,
                        commentCount,
                      }) => (
                        <S.Bl2 style={{ cursor: 'pointer' }} key={postID}>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size01"
                          >
                            {postID}
                          </S.Bl3>
                          <S.Bl3
                            style={{
                              fontSize: 'medium',
                            }}
                            className="size02"
                          >
                            <Link
                              style={{ color: 'black' }}
                              to={`/community/info/${postID}`}
                            >
                              {title}{' '}
                              <span style={{ color: 'red' }}>
                                ({commentCount})
                              </span>
                            </Link>
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size03"
                          >
                            {userNickname}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size04"
                          >
                            {viewCount}
                          </S.Bl3>
                          <S.Bl3
                            style={{ fontSize: 'medium' }}
                            className="size05"
                          >
                            {likeCount}
                          </S.Bl3>
                        </S.Bl2>
                      ),
                    )}
                </S.Bl1>
              </S.Table2>
            </S.Table1>
          </S.Table0>
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
              onChange={e => setquery(e.target.value)}
            />
            &nbsp;
            <button
              className="button is-pink"
              type="button"
              id="search_btn"
              onClick={() => navigate(`/search/${query}`)}
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
      </Desktop>
    </S.Newboard>
  );
};
