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
import { useParams } from 'react-router-dom';

export const CommunityInfoForm = () => {
  const [users, setusers] = useState([]);
  const [title, settitle] = useState('');
  const [userNickname, setuserNickname] = useState('');
  const [viewCount, setviewCount] = useState(0);
  const [likeCount, setlikeCount] = useState(0);
  const [commentCount, setcommentCount] = useState(0);
  const { communityID } = useParams();

  const userData = () => {
    return axios
      .get(`http://4idiot.ddns.net:8080/community/info/${communityID}`)
      .then(response => {
        console.log(response);
        setusers(response.data);
        setuserNickname(response.data.userNickname);
        settitle(response.data.settitle);
        setviewCount(response.data.viewCount);
        setlikeCount(response.data.likeCount);
        setcommentCount(response.data.commentCount);
      });
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>
        커뮤니티 상세
      </Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <div>.</div>
      </Box>
    </Container>
  );
};
