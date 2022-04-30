/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';

import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Image,
  Tag,
  tags,
} from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';
import SlateEditor from '../../SlateEditor/Editor';

export const CommunityWriteForm = () => {
  const [data, setdata] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [hashtag, sethashtag] = useState([]);
  const [title, settitle] = useState('');
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const { fromUserId } = useParams(`${decodedToken?.id}`);

  /* const [postInfo, setPostInfo] = useState({
    indata: [
      {
        type: 'paragaph',
        children: [{ text: '커뮤니티' }],
      },
    ],
  });
 */

  const [Contents, setContents] = useState({
    projectContent: [
      {
        type: 'paragaph',
        children: [{ text: '글작성' }],
      },
    ],
  });

  const userData = () => {
    return axios
      .get('http://4idiot.ddns.net:8080/communityw')
      .then(response => {
        console.log(response);
        setdata(response.data);
      });
  };

  useEffect(() => {
    userData();
  }, []);

  const titledata = e => {
    settitle(e.target.value);
  };

  const onEnter = e => {
    if (e.key === 'Enter') {
      sethashtag([...hashtag, tagInput]);

      setTagInput('');
    }
    console.log(hashtag);
  };
  const removeList = id => {
    console.log(id);

    sethashtag(hashtag.filter(item => item !== id));
  };

  const Write = e => {
    if (title) {
      axios
        .post(`http://4idiot.ddns.net:8080/write/${decodedToken?.id}`, {
          hashtag,
          title,
        })

        .then(response => {
          console.log(response.data.message);
          userData();
          alert('작성이 완료하였습니다.');
          window.location = '/community';
        })
        .catch(response => {
          alert('입력값을 확인해주세요.');
        });
    } else {
      alert('입력값을 확인해');
    }
    e.preventDefault();
  };

  return (
    <Container>
      {JSON.stringify(fromUserId)}
      <Heading style={{ textAlign: 'center', margin: 35 }}>
        커뮤니티 글쓰기
      </Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <Form.Field>
          <Form.Label>제목</Form.Label>
          <Form.Control>
            <Form.Input type="text" onChange={titledata} value={title} />
          </Form.Control>
        </Form.Field>

        <Form.Label>내용</Form.Label>
        <SlateEditor value={Contents} setValue={setContents} />

        <br />

        <br />

        <Form.Field>
          <Form.Label>태그 (#)</Form.Label>
          <Form.Control>
            <div>
              <input
                type="text"
                value={tagInput}
                onChange={e => setTagInput(e.currentTarget.value)}
                placeholder="해시태그 입력"
                onKeyPress={onEnter}
              />
            </div>
            <br />

            {hashtag.map((item, id) => (
              <span item={item} key={id} className="tag is-warning is-medium">
                #{item}
                <button
                  key={id}
                  onClick={() => removeList(item)}
                  className="delete is-small"
                ></button>
                <br />
              </span>
            ))}
          </Form.Control>
        </Form.Field>

        <div style={{ textAlign: 'center' }}>
          <Button color="danger" size="small" onClick={Write}>
            작성
          </Button>
        </div>
      </Box>
    </Container>
  );
};
