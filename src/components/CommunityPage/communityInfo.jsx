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

export const CommunityInfoForm = () => {
  const [users, setusers] = useState([]);
  const [id, setid] = useState();

  useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/team').then(response => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []);

  return <Container>.</Container>;
};
