import React, { useState, useCallback, useEffect } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { findIDService } from '../../services/loginService';
import { useAuth } from '../../contexts/hooks/useAuth';

export const FindIDForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (decodedToken) {
      navigate('/');
    }
  }, [decodedToken]);

  const { userName, userEmail } = userInfo;

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const findIDAxios = async () => {
    try {
      const result = await findIDService(userName, userEmail);
      alert(`아이디는 ${result.data.userID} 입니다.`);
    } catch (error) {
      alert('다시 시도해주세요');
      navigate('/login/findID');
    }
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    findIDAxios();
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>아이디 찾기</Heading>
      <Box style={{ width: '60%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>이름</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userName || ''}
              name="userName"
              onChange={onChangeAccountEvent}
              placeholder="이름"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              value={userEmail || ''}
              name="userEmail"
              onChange={onChangeAccountEvent}
              placeholder="이메일"
            />
          </Form.Control>
        </Form.Field>
        <Button.Group align="center">
          <Button color="success" onClick={onSubmitEvent}>
            아이디 찾기
          </Button>
        </Button.Group>
      </Box>
    </Container>
  );
};
