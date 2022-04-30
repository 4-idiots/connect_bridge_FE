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

export const CommunityPForm = ({ commentCount, onActClick, hashtag }) => {
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
        `http://4idiot.ddns.net:8080/serach/${query}`,
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
    fetch('http://4idiot.ddns.net:8080/community/popular')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h1>인기 게시물 목록</h1>
      </header>
      <Card renderAs={Link} to="/community">
        전체
      </Card>
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

      <main>
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
              <article key={postID}>
                <Card
                  renderAs={Link}
                  to={`/community/info/${decodedToken?.id}/${postID}`}
                >
                  {postID}. {title}
                  <Layouta>
                    글쓴이:{userNickname} 조회수:{viewCount} 좋아요:
                    {likeCount}
                  </Layouta>
                </Card>
                <p>{body}</p>
              </article>
            ),
          )}
      </main>
      <div
        style={{
          textalign: 'center',
          width: '100px',
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
        <button type="button" id="search_btn" onClick={handleButton}>
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
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  word-break: nowrap;
`;
const Layouta = styled.div`
  align-items: left;
`;

CommunityPForm.propTypes = {
  commentCount: PropTypes.number,
  onActClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  hashtag: PropTypes.array,
};

CommunityPForm.defaultProps = {
  commentCount: 0,

  onActClick: () => {
    console.log('hh');
  },
  hashtag: [''],
};
