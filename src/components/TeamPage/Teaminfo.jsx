import axios from 'axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
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

export const TeaminfoForm = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/user').then(response => {
      setusers(response.data);
    });
  }, []);

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>상세페이지</Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <div>
          {users.map(user => {
            return <div key={user.id}>{user.userNickname}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userName}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userAbility}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userArea}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userTime}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userInterest}</div>;
          })}
          <br />
          {users.map(user => {
            return <div key={user.id}>{user.userIntroduce}</div>;
          })}
          {users.map(user => {
            return <div key={user.id}>{user.userPicture}</div>;
          })}
          <br />
        </div>
      </Box>
    </Container>
  );
};
