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
import { InfoForm } from './info';

export const TeamForm = () => {
  const [users, setusers] = useState([]);
  const [id, setid] = useState();

  useEffect(() => {
    axios.get('http://4idiot.ddns.net:8080/team').then(response => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []);

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>팀원 구하기</Heading>
      <div>
        {users.map(user => {
          return (
            <div
              key={user.id}
              style={{
                marginRight: '30px',
                marginLeft: '16px',
                display: 'inline-block',
              }}
            >
              {
                <Card
                  style={{
                    marginTop: '30px',
                    marginRight: '30px',
                    width: '260px',
                    border: '2px solid #e7e7e7',
                    padding: '14px ',
                  }}
                >
                  <Card.Image
                    renderAs={Link}
                    to={`/team/info/${user.id}`}
                    size="4by3"
                    src="http://bulma.io/images/placeholders/1280x960.png"
                  />
                  <Card.Content>
                    {/* 여기가 좋아요 */}
                    <Media>
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
                            {users.map(userA => {
                              return (
                                userA.id === 1 && (
                                  <div key={userA.id}>{user.userNickname}</div>
                                )
                              );
                            })}
                          </div>
                        </Heading>
                        <Heading size={6}>
                          <div>
                            {users.map(userA => {
                              return (
                                userA.id === 1 && (
                                  <div key={userA.id}>{user.userAbility}</div>
                                )
                              );
                            })}
                          </div>
                        </Heading>
                        <Heading size={6}>
                          <div>
                            {users.map(userA => {
                              return (
                                userA.id === 1 && (
                                  <div key={userA.id}>{user.userInterest}</div>
                                )
                              );
                            })}
                          </div>
                        </Heading>
                      </Media.Item>
                    </Media>
                  </Card.Content>
                </Card>
              }
            </div>
          );
        })}
      </div>
    </Container>
  );
};
