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
  const [like, setlike] = useState([0]);

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

  return (
    <Container>
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
          <Button
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
      <Box style={{ margin: 100, Box: 'center' }}>
        {like.map((a, i) => {
          return (
            <div key={a}>
              <h3>
                {a}
                <Button
                  onClick={() =>
                    setlike(arr =>
                      arr.map((el, idx) => (idx === i ? el + 1 : el)),
                    )
                  }
                >
                  <span role="img" aria-label="good">
                    👍
                  </span>
                </Button>
                <Button
                  onClick={() =>
                    setlike(arr =>
                      arr.map((el, idx) => (idx === i ? el - 1 : el)),
                    )
                  }
                >
                  <span role="img" aria-label="bad">
                    👎
                  </span>
                </Button>
                {like[i]}
              </h3>
              <p>좋아요</p>
              <hr />
            </div>
          );
        })}
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
