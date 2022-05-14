import React, { useCallback, useState, useEffect } from 'react';
import { Box, Button, Container, Form, Heading } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '../../services/loginService';
import customAxios from '../../services/customAxios';
import { useAuth } from '../../contexts/hooks/useAuth';

export const LoginForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const { userID, userPW } = userInfo;

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin') || '';
    if (isLogin) {
      navigate('/');
    }
  }, []);

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const loginAxios = async (uID, uPW) => {
    try {
      const result = await loginService(uID, uPW);
      const token = result.data.accessToken || '';
      customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
      auth.login(token);
      navigate('/');
    } catch (error) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const onSubmitEvent = () => {
    loginAxios(userID, userPW);
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
            비밀번호 재설정
          </Button>
        </Button.Group>
      </Box>
    </Container>
  );
};
