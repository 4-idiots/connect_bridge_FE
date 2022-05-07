/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
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
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';

export const InfoForm = () => {
  const [users, setusers] = useState([]);
  const [myid, setmyid] = useState();
  const [userNickname, setuserNickname] = useState('');
  const [userName, setuserName] = useState('');
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterest, setuserInterest] = useState('');
  const [userIntroduce, setuserIntroduce] = useState('');
  const { teamID } = useParams();
  const [off, setoff] = useState(0);
  const [like, setlike] = useState(0);
  const [follow, setfollow] = useState(0);
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const { teID } = useParams(`${decodedToken?.id}`);
  const [color, setColor] = useState('');

  const userData = () => {
    if (teID > 0) {
      axios.get(`/api/team/info/${teID}/${teamID}`).then(response => {
        console.log(response);
        setusers(response.data);
        setmyid(response.data.myid);
        setuserNickname(response.data.userNickname);
        setuserName(response.data.userName);
        setuserAbility(response.data.userAbility);
        setuserArea(response.data.userArea);
        setuserTime(response.data.userTime);
        setuserInterest(response.data.userInterest);
        setuserIntroduce(response.data.userIntroduce);
        setfollow(response.data.follow);
        setColor(response.data.color);
      });
    } else {
      axios.get(`/api/team/info/0/${teamID}`).then(response => {
        console.log(response);
        setusers(response.data);
        setmyid(response.data.myid);
        setuserNickname(response.data.userNickname);
        setuserName(response.data.userName);
        setuserAbility(response.data.userAbility);
        setuserArea(response.data.userArea);
        setuserTime(response.data.userTime);
        setuserInterest(response.data.userInterest);
        setuserIntroduce(response.data.userIntroduce);
        setfollow(response.data.follow);
      });
    }
  };
  const followdata = () => {
    setfollow(current => !current);
  };

  const likeClick = () => {
    if (follow === 1) {
      axios.get(`/api/follow/${decodedToken.id}/${teamID}`).then(response => {
        console.log(decodedToken.id);
        console.log(teamID);
        console.log(response.data.follow);
      });
      // eslint-disable-next-line no-unused-expressions
      color === 'black' ? setColor('danger') : setColor('black');
      // eslint-disable-next-line no-unused-expressions
    } else if (follow === 2)
      axios
        .delete(`/api/follow/${decodedToken.id}/${teamID}`)
        .then(response => {
          console.log(decodedToken.id);
          console.log(teamID);
          console.log(response.data.follow);
        });
    // eslint-disable-next-line no-unused-expressions
    color === 'danger' ? setColor('black') : setColor('danger');
  };

  const likeunClick = () => {
    // eslint-disable-next-line no-unused-expressions
    color === 'danger' ? setColor('black') : setColor('danger');
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <Container>
      {JSON.stringify(follow)}
      <Heading
        style={{
          textAlign: 'center',
          margin: '2% auto',

          padding: '20px 50px',
        }}
      >
        상세페이지
      </Heading>
      <Box
        style={{
          Box: 'center',

          margin: '2% 8%',
          padding: '20px 50px',
        }}
      >
        <Image
          style={{ padding: '20px 400px' }}
          src="https://wallpapercave.com/wp/tU89SSy.jpg"
        />
        <div style={{ textAlign: 'center', fontSize: 36, fontWeight: 600 }}>
          {userNickname}
        </div>
        <br />

        <div style={{ textAlign: 'center' }}>
          {follow === 1 ? (
            <Button onClick={likeClick} onChange={followdata} color={color}>
              <h1>♥</h1>
            </Button>
          ) : follow === 2 ? (
            <Button onClick={likeClick} onChange={followdata} color={color}>
              <h1>♥</h1>
            </Button>
          ) : (
            <> </>
          )}
        </div>

        <br />
        <br />
        <br />
        <br />
        <span
          style={{
            fontSize: 20,
            fontWeight: 600,
            width: '70px',
            margin: '15px 210px',
          }}
        >
          관심분야
          <span
            style={{
              fontSize: 23,
              fontWeight: 600,
              width: '70px',
              margin: '15px 190px',
            }}
          >
            {userInterest}
          </span>
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: 15,
            width: '55px',

            margin: '15px 210px',
          }}
        >
          실력
          <span
            style={{
              width: '70px',
              margin: '15px 240px',
            }}
          >
            {userAbility}
          </span>
        </span>
        <span
          style={{
            fontSize: 15,
            width: '55px',
            margin: '15px 210px',
          }}
        >
          지역
          <span
            style={{
              width: '70px',
              margin: '15px 240px',
            }}
          >
            {userArea}
          </span>
        </span>
        <span
          style={{
            fontSize: 15,
            width: '55px',
            margin: '15px 210px',
          }}
        >
          시간
          <span
            style={{
              width: '70px',
              margin: '15px 240px',
            }}
          >
            {userTime}
          </span>
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: 13.5,
            width: '70px',
            margin: '10px 210px',
          }}
        >
          한줄소개
          <span
            style={{
              width: '70px',
              margin: '15px 215px',
            }}
          >
            {userIntroduce}
          </span>
        </span>
      </Box>
    </Container>
  );
};
