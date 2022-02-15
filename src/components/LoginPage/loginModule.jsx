import React, { useCallback, useState, useEffect } from 'react';
import { Box, Button, Container, Form, Heading } from 'react-bulma-components';
import { decodeToken } from 'react-jwt';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '../../service';

export const LoginForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUser = localStorage.getItem('token') || '';
    if (isUser) {
      navigate('/');
    }
  }, []);
  const [userInfo, setUserInfo] = useState({});
  const { userID, userPW } = userInfo;

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const onSubmitEvent = e => {
    e.preventDefault();
    loginService(userID, userPW)
      .then(response => {
        const token = response.data.token || '';
        // const decode = decodeToken(token);
        localStorage.setItem('token', token);
        // localStorage.setItem('decode', JSON.stringify(decode));
        navigate('/');
      })
      .catch(error => {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      });
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>로그인</Heading>
      <Box style={{ width: '60%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>아이디</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userID || ''}
              name="userID"
              onChange={onChangeAccountEvent}
              placeholder="아이디"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="password"
              value={userPW || ''}
              name="userPW"
              onChange={onChangeAccountEvent}
              placeholder="비밀번호"
            />
          </Form.Control>
        </Form.Field>
        <Button.Group align="center">
          <Button color="success" onClick={onSubmitEvent}>
            로그인
          </Button>
        </Button.Group>
      </Box>

      <Box style={{ width: '60%', margin: 'auto' }}>
        <Button.Group align="center">
          <Button renderAs={Link} to="/sign" color="danger">
            회원 가입
          </Button>
          <Button renderAs={Link} to="/login/findID" color="info">
            아이디 찾기
          </Button>
          <Button renderAs={Link} to="/login/findPW" color="info">
            비밀번호 찾기
          </Button>
        </Button.Group>
      </Box>
    </Container>
  );
};
