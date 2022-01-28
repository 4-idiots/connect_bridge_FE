import React, { useState } from 'react';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Hero,
} from 'react-bulma-components';
// import axios from 'axios';

export const FindIDForm = () => {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
  });

  const { userName, userPhone, userEmail } = userInfo;

  const onChangeAccountEvent = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(userInfo);
    // axios.post('', { userName, userPhone, userEmail }).then(response => {
    //   console.log(response);
    // });
  };

  return (
    <Hero.Body>
      <Container>
        <Heading style={{ textAlign: 'center' }}>아이디 찾기</Heading>
        <Box style={{ width: '60%', margin: 'auto' }}>
          <Form.Field>
            <Form.Label>이름</Form.Label>
            <Form.Input
              type="text"
              value={userName}
              name="userName"
              onChange={onChangeAccountEvent}
              placeholder="이름"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label>휴대폰 번호</Form.Label>
            <Form.Input
              type="text"
              value={userPhone}
              name="userPhone"
              onChange={onChangeAccountEvent}
              placeholder="ex) 01012345678"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label>이메일</Form.Label>
            <Form.Input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={onChangeAccountEvent}
              placeholder="이메일"
            />
          </Form.Field>
          <Button color="success" onClick={onSubmitEvent}>
            아이디 찾기
          </Button>
        </Box>
      </Container>
    </Hero.Body>
  );
};
