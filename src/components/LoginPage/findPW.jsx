import React, { useState } from 'react';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';

export const FindPWForm = () => {
  const [userInfo, setUserInfo] = useState({
    userID: '',
    userName: '',
    userEmail: '',
  });

  const { userID, userName, userEmail } = userInfo;

  const onChangeAccountEvent = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(userInfo);
    // axios.post('', { userID, userName, userEmail }).then(response => {
    //   console.log(response);
    // });
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>비밀번호 찾기</Heading>
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
          <Form.Label>아이디</Form.Label>
          <Form.Input
            type="text"
            value={userID}
            name="userID"
            onChange={onChangeAccountEvent}
            placeholder="아이디"
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
  );
};
