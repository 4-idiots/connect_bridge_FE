/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import SlateEditor from '../../SlateEditor/Editor';

export const CommunityChangeForm = () => {
  const [tagInput, setTagInput] = useState('');
  const [hashtag, sethashtag] = useState([]);
  const [title, settitle] = useState('');
  const { communityID } = useParams();
  const [contents, setcontents] = useState({});

  const userData = () => {
    axios.get(`/api/communitychange/${communityID}`).then(response => {
      sethashtag(response.data.hashtag);
      settitle(response.data.title);
      setcontents({ content: response.data.contents });
    });
  };

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

  const Change = e => {
    if (title) {
      axios
        .patch('/api/community/write', {
          postID: communityID,
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

  useEffect(() => {
    userData();
  }, []);
  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>
        커뮤니티 수정하기
      </Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <Form.Field>
          <Form.Label>제목</Form.Label>
          <Form.Control>
            <Form.Input type="text" onChange={titledata} value={title} />
          </Form.Control>
        </Form.Field>

        <Form.Label>내용</Form.Label>

        {contents.content && (
          <SlateEditor value={contents} setValue={setcontents} />
        )}
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
          <Button color="danger" size="small" onClick={Change}>
            수정
          </Button>
        </div>
      </Box>
    </Container>
  );
};
