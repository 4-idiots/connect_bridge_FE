/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { CommunityWriteForm } from './communityWrite';

export const CommunityForm = () => {
  const [users, setusers] = useState([]);
  const [id, setid] = useState();

  /* useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/team').then(response => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []); */

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>커뮤니티</Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <div>{CommunityWriteForm.title}</div>
        <div style={{ textAlign: 'center' }}>
          <Button
            color="danger"
            size="small"
            renderAs={Link}
            to="/community/write" /* onClick={write} */
          >
            글쓰기
          </Button>
        </div>
      </Box>
    </Container>
  );
};
