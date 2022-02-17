/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
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

export const TeamForm = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/user').then(response => {
      setusers(response.data);
    });
  }, []);

  /*  useEffect(() => {
    fetch('http://4idiot.ddns.net:8080/user')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setusers(data);
      });
  }, []); */

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>팀원 구하기</Heading>

      <Card style={{ width: 250, margin: 10 }}>
        <Card.Image
          renderAs={Link}
          to="/team/teaminfo"
          size="4by3"
          src="http://bulma.io/images/placeholders/1280x960.png"
        />
        <Card.Content>
          {/* 여기가 좋아요 */}
          <Media renderAs={Link} to="/team/teaminfo">
            {/*  <Media.Item renderAs="figure" align="left">
              <Image
                size={25}
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
            </Media.Item> */}
            <Media.Item>
              <Heading size={6}>
                <div>
                  {users.map(user => {
                    return <div key={user.id}>{user.userAbility}</div>;
                  })}
                </div>
              </Heading>
              <Heading size={6}>
                <div>
                  {users.map(user => {
                    return <div key={user.id}>{user.userAbility}</div>;
                  })}
                </div>
              </Heading>
              <Heading size={6}>
                <div>
                  {users.map(user => {
                    return <div key={user.id}>{user.userInterest}</div>;
                  })}
                </div>
              </Heading>
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </Container>
  );
};
