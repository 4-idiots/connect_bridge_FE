import React, { useState, useCallback, useEffect } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import ReactLoading from 'react-loading';
import { findPWServcie } from '../../services/loginService';
import { useAuth } from '../../contexts/hooks/useAuth';

export const FindPWForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [emLoading, setEmLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (decodedToken) {
      navigate('/');
    }
  }, [decodedToken]);

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const findPWAxios = async () => {
    setEmLoading(true);
    try {
      await findPWServcie(
        userInfo.userID,
        userInfo.userName,
        userInfo.userEmail,
      );
      setEmLoading(false);
      alert('임시 비밀번호가 발급 되었습니다. 메일을 확인하세요');
    } catch (error) {
      setEmLoading(false);
      alert('다시 시도해주세요');
    }
  };
  const onSubmitEvent = e => {
    e.preventDefault();
    findPWAxios();
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>비밀번호 재설정</Heading>
      <Box style={{ width: '60%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>이름</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userInfo.userName || ''}
              name="userName"
              onChange={onChangeAccountEvent}
              placeholder="이름"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>아이디</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userInfo.userID || ''}
              name="userID"
              onChange={onChangeAccountEvent}
              placeholder="아이디"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              value={userInfo.userEmail || ''}
              name="userEmail"
              onChange={onChangeAccountEvent}
              placeholder="이메일"
            />
          </Form.Control>
        </Form.Field>
        <Button.Group align="center">
          <Button color="success" onClick={onSubmitEvent}>
            {emLoading ? (
              <ReactLoading type="bubbles" color="white" />
            ) : (
              '재설정 하기'
            )}
          </Button>
        </Button.Group>
      </Box>
    </Container>
  );
};
