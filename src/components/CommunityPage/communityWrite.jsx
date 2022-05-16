/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';
import SlateEditor from '../../SlateEditor/Editor';
import customAxios from '../../services/customAxios';

export const CommunityWriteForm = () => {
  const [tagInput, setTagInput] = useState('');
  const [hashtag, sethashtag] = useState([]);
  const [title, settitle] = useState('');
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [contents, setcontents] = useState({
    content: [
      {
        type: 'paragaph',
        children: [{ text: '글작성' }],
      },
    ],
  });

  const titledata = e => {
    settitle(e.target.value);
  };

  const onEnter = e => {
    if (e.key === 'Enter') {
      sethashtag([...hashtag, tagInput]);

      setTagInput('');
    }
  };
  const removeList = id => {
    sethashtag(hashtag.filter(item => item !== id));
  };

  const Write = e => {
    if (title) {
      customAxios
        .post(`/api/write`, {
          hashtag,
          title,
          contents: JSON.stringify(contents.content),
        })

        .then(() => {
          alert('작성이 완료하였습니다.');
          window.location = '/community';
        })
        .catch(() => {
          alert('입력값을 확인해주세요.');
        });
    } else {
      alert('입력값을 확인해');
    }
    e.preventDefault();
  };

  return (
    <Container>
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
        <SlateEditor value={contents} setValue={setcontents} />

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
                  type="button"
                />
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
