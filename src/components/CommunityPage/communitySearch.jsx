import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './serachStyle';
import { Pagination } from '../../swr/Pagination';
import { getSearchCommunity } from '../../services/communityService';

export const CommunitySearchForm = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const { query } = useParams();
  const [querya, setquerya] = useState('');

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await getSearchCommunity(query);
        setPosts(result.data);
      } catch (error) {
        // pass
      }
    };

    getAxios();
  }, []);

  return (
    <S.Newboard>
      <div>
        <S.Layout>
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
        </S.Layout>
        <S.Boardtop>
          <S.Layout3>
            <S.Layout2>
              <a href="/community">전체</a>
            </S.Layout2>
            <S.Layout2>
              <a href="/community/popular">인기</a>
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
                    ({ postID, title, userNickname, viewCount, likeCount }) => (
                      <S.Bl2 key={postID}>
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
                          <S.TDiv
                            onClick={() => {
                              navigate(`/community/info/${postID}`);
                            }}
                          >
                            {title}
                          </S.TDiv>
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
            onChange={e => setquerya(e.target.value)}
          />
          &nbsp;
          <button
            className="button is-pink"
            type="button"
            id="search_btn"
            onClick={() => navigate(`/search/${querya}`)}
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
    </S.Newboard>
  );
};
