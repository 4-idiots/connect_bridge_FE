import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
} from 'react-bulma-components';

export const CommunityWriteForm = () => {
  const [data, setdata] = useState([]);
  const [hashtag, sethashtag] = useState([]);
  const [title, settitle] = useState('');
  const [contents, setcontents] = useState('');

  /*  useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/team').then(response => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []);
 */
  const userData = () => {
    return axios.get('http://4idiot.ddns.net:8080/community').then(response => {
      console.log(response);
      setdata(response.data);
    });
  };
  useEffect(() => {
    userData();
  }, []);

  const hashtagdata = e => {
    sethashtag(e.target.value);
  };

  const titledata = e => {
    settitle(e.target.value);
  };

  const hash = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      hashtagdata();
    }
  };

  const Write = e => {
    e.preventDefault();

    if (hashtag && title && contents) {
      axios
        .post('http://4idiot.ddns.net:8080/community/write', {
          hashtag,
          title,
          contents,
        })

        .then(response => {
          console.log(response.data.message);
          console.log(data);
          userData();
          alert('작성이 완료하였습니다.');
          window.location = '/community';
        })
        .catch(response => {
          alert('입력값을 확인해주세요.');
        });
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  /*  const contentsdata = e => {
    setcontents(e.target.value);
  }; */

  /* const userData = () => {
    return axios.get('http://4idiot.ddns.net:8080/users').then(response => {
      console.log(response);
      setdata(response.data);
    });
  };

  useEffect(() => {
    userData();
  }, []); */

  /* const Write = e => {
    e.preventDefault();

    axios
      .post('http://4idiot.ddns.net:8080/users/register', {
        hashtag,
        title,
        contents,
      })

      .then(response => {
        console.log(response.data.message);
        console.log(data);
          userData();
        alert('회원가입이 완료하였습니다.'); 
        window.location = '/community';
      })
      .catch(response => {
        alert('입력값을 확인해주세요.');
      });
  }; */

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>글쓰기</Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <Form.Field>
          <Form.Label>제목</Form.Label>
          <Form.Control>
            <Form.Input type="text" onChange={titledata} value={title} />
          </Form.Control>
        </Form.Field>

        <Form.Label>내용</Form.Label>
        <Form.Field>
          <div style={{}}>
            <ReactQuill
              style={{ height: 400 }}
              theme="snow"
              delta={contents}
              onChange={setcontents}
            />
          </div>
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <Form.Label>태그 (#)</Form.Label>
          <Form.Control>
            <div>
              <input
                type="text"
                value={hashtag}
                onChange={hashtagdata}
                onKeyUp={hash}
                placeholder="해시태그 입력"
              />
            </div>
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
