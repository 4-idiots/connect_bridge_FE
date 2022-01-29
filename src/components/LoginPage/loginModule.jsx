import React, { useState } from 'react';
// import axios from 'axios';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [account, setAccount] = useState({
    userID: '',
    userPW: '',
  });

  const { userID, userPW } = account;

  const onChangeAccountEvent = e => {
    setAccount({
      ...account,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(account);
    // axios.post('', { userID, userPW }).then(response => {
    //   console.log(response);
    // });
  };

  return (
    <Container backgroundColor="success">
      <Heading style={{ textAlign: 'center' }}>로그인</Heading>
      <Box style={{ width: '60%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>아이디</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={userID}
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
              value={userPW}
              name="userPW"
              onChange={onChangeAccountEvent}
              placeholder="비밀번호"
            />
          </Form.Control>
        </Form.Field>
        <Button color="success" onClick={onSubmitEvent}>
          로그인
        </Button>
      </Box>

      <Box style={{ width: '60%', margin: 'auto' }}>
        <Button.Group>
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
