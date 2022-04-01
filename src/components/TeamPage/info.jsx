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

  const userData = () => {
    if (teID > 0) {
      axios
        .get(`http://4idiot.ddns.net:8080/team/info/${teID}/${teamID}`)
        .then(response => {
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
    } else {
      axios
        .get(`http://4idiot.ddns.net:8080/team/info/0/${teamID}`)
        .then(response => {
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
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    if (follow === 1) {
      axios
        .get(`http://4idiot.ddns.net:8080/follow/${decodedToken.id}/${teamID}`)
        .then(response => {
          console.log(decodedToken.id);
          console.log(teamID);
          console.log(response.data.follow);
        });
    } else if (follow === 2)
      axios
        .delete(
          `http://4idiot.ddns.net:8080/follow/${decodedToken.id}/${teamID}`,
        )
        .then(response => {
          console.log(decodedToken.id);
          console.log(teamID);
          console.log(response.data.follow);
        });
  };

  const likeunClick = () => {};

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
        {JSON.stringify(decodedToken)}
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
            <Button
              onClick={likeClick}
              onChange={followdata}
              style={{
                width: '10%',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'black',
                padding: '15px 50px',
              }}
            >
              ♥
            </Button>
          ) : follow === 2 ? (
            <Button
              onClick={likeClick}
              onChange={followdata}
              style={{
                width: '10%',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'red',
                padding: '15px 50px',
              }}
            >
              ♥
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

/* axios.post('/api/like/getLike', body).then(res => {
  if (res.data.getLike) {
    // 얼마나 많은 좋아요를 받았는가
    setLikes(res.data.likes.length);

    // 내가 이미 좋아요를 눌렀는가
    res.data.likes.map(like => {
      if (like.userId === userData._id) {
        setAction('liked');
      }
    });
  } else {
    alert('좋아요 데이터를 가져오는데 실패했습니다.');
  }
});
  }, []);
 */

/*  apiRouter.post("/like/uplike", (req, res) => {
    let { commentId, userId } = req.body;
  
    const LikeIns = new Like({ userId, commentId });
  
    LikeIns.save((err, result) => {
      if (err) return res.status(400).json({ upLike: false, err });
  
      // 만약 이미 싫어요를 누른 상태라면, 싫어요를 취소야 합니다.
      Dislike.findByIdAndDelete(result._id).exec((err, dislikeResult) => {
        if (err) return res.status(400).json({ upLike: false, err });
        return res.status(200).json({ upLike: true });
      });
    });
  }); */
