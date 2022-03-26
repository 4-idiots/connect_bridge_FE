import React, { useState, useCallback } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { findIDService } from '../../service';

export const FindIDForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const { userName, userPhone, userEmail } = userInfo;

  const onChangeAccountEvent = useCallback(
    e => {
      setUserInfo({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userInfo],
  );

  const findIDAxios = async (uName, uPhone, uEmail) => {
    try {
      const result = await findIDService(uName, uPhone, uEmail);
      alert(`아이디는 ${result.data.userID} 입니다.`);
    } catch (error) {
      alert('다시 시도해주세요');
      window.location.replace('/login/findID');
    }
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    findIDAxios(userName, userPhone, userEmail);
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
          <Form.Label>휴대폰 번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userPhone || ''}
              name="userPhone"
              onChange={onChangeAccountEvent}
              placeholder="ex) 01012345678"
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
