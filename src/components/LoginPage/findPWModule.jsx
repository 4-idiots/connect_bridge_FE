import React, { useState, useCallback } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { findPWServcie } from '../../service';

export const FindPWForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const { userID, userName, userEmail } = userInfo;

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const findPWAxios = async (uID, uName, uEmail) => {
    try {
      const result = await findPWServcie(uID, uName, uEmail);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitEvent = e => {
    e.preventDefault();
    findPWAxios(userID, userName, userEmail);
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>비밀번호 찾기</Heading>
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
