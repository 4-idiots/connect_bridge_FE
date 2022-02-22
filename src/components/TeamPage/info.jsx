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

export const InfoForm = () => {
  const [users, setusers] = useState([]);
  const [userNickname, setuserNickname] = useState([]);
  const [userName, setuserName] = useState([]);
  const [userAbility, setuserAbility] = useState([]);
  const [userArea, setuserArea] = useState([]);
  const [userTime, setuserTime] = useState([]);
  const [userInterest, setuserInterest] = useState([]);
  const [userIntroduce, setuserIntroduce] = useState([]);
  const { teamID } = useParams();

  const userData = () => {
    return axios
      .get(`http://4idiot.ddns.net:8080/team/info/${teamID}`)
      .then(response => {
        console.log(response);
        setusers(response.data);
        setuserNickname(response.data.registerDto.userNickname);
        setuserName(response.data.registerDto.userName);
        setuserAbility(response.data.registerDto.userAbility);
        setuserArea(response.data.registerDto.userArea);
        setuserTime(response.data.registerDto.userTime);
        setuserInterest(response.data.registerDto.userInterest);
        setuserIntroduce(response.data.registerDto.userIntroduce);
      });
  };

  useEffect(() => {
    userData();
  }, []);

  /* useEffect(() => {
    axios.get(`http://4idiot.ddns.net:8080/team/info/3`).then(response => {
      setusers(response.data);
      console.log(response.data);
    });
  }, []);
 */
  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>상세페이지</Heading>
      <Box style={{ margin: 100, Box: 'center' }}>
        <div>{userNickname}</div>
        <div>{userName}</div>
        <div>{userAbility}</div>
        <div>{userArea}</div>
        <div>{userTime}</div>
        <div>{userInterest}</div>
        <div>{userIntroduce}</div>
      </Box>
    </Container>
  );
};
