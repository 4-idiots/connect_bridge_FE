/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import {
  mainArray,
  planArray,
  frontArray,
  designArray,
  backArray,
  coopArray,
  etcArray,
} from '../ProjectPage/uploadComponent/uploadValue';

export const SignupForm = () => {
  const [data, setdata] = useState('');
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userREPW, setuserREPW] = useState('');
  const [userNickname, setuserNickname] = useState('');
  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userIntroduce, setuserIntroduce] = useState('');
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterestMain, setuserInterestMain] = useState('');
  const [sameID, setsameID] = useState(false);
  const [sameNickname, setsameNickname] = useState(false);
  const [sameEmail, setsameEmail] = useState(false);
  const [code, setcode] = useState('');
  const [codeon, setcodeon] = useState(false);
  const [userInterestSub, setuserInterestSub] = useState('');

  const genOption = arrayTitle => {
    return (
      <>
        {arrayTitle.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  };
  const userData = () => {
    return axios.get('/api/users').then(response => {
      console.log(response);
      setdata(response.data);
    });
  };

  useEffect(() => {
    userData();
  }, []);

  const userIDdata = e => {
    setuserID(e.target.value);
  };

  const userPWdata = e => {
    setuserPW(e.target.value);
  };

  const userREPWdata = e => {
    setuserREPW(e.target.value);
  };

  const userNicknamedata = e => {
    setuserNickname(e.target.value);
  };

  const userNamedata = e => {
    setuserName(e.target.value);
  };

  const userInterestSubdata = e => {
    setuserInterestSub(e.target.value);
  };

  const userEmaildata = e => {
    setuserEmail(e.target.value);
  };

  const userIntroducedata = e => {
    setuserIntroduce(e.target.value);
  };

  const userAbilitydata = e => {
    setuserAbility(e.target.value);
  };

  const userAreadata = e => {
    setuserArea(e.target.value);
  };

  const userTimedata = e => {
    setuserTime(e.target.value);
  };

  const userInterestMaindata = e => {
    setuserInterestMain(e.target.value);
  };
  const codedata = e => {
    setcode(e.target.value);
  };

  const sameIDButton = e => {
    e.preventDefault();

    axios.get(`/api/users/check/userID?userID=${userID}`).then(response => {
      console.log(response);
      if (response.data.value === true) {
        alert('중복입니다. 다시 입력해주세요');

        setsameID(false);
      } else {
        alert('중복이 아닙니다.');
        setsameID(true);
      }
    });
  };

  const sameNicknameButton = e => {
    e.preventDefault();

    axios
      .get(`/api/users/check/userNickname?userNickname=${userNickname}`)
      .then(response => {
        console.log(response);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요');

          setsameNickname(false);
        } else {
          alert('중복이 아닙니다.');
          setsameNickname(true);
        }
      });
  };

  const sameEmailButton = e => {
    e.preventDefault();

    axios
      .get(`/api/users/check/userEmail?userEmail=${userEmail}`)
      .then(response => {
        console.log(response);
        console.log(response.data.value);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요.');

          setsameEmail(false);
        } else {
          alert('중복이 아닙니다.');
          setsameEmail(true);
        }
      });
  };

  const EmailOnClick = e => {
    e.preventDefault();
    if (sameEmail === true) {
      // eslint-disable-next-line prefer-const
      axios
        .post('/api/users/check/Email', {
          userEmail,
        })
        .then(response => {
          console.log(data);
          alert('이메일 인증칸에 6글자를 입력해주세요');
          // eslint-disable-next-line react/no-this-in-sfc

          // eslint-disable-next-line no-unused-vars
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          alert('이메일 중복 체크를 해주세요.');
        });
    } else alert('이메일 중복 체크를 해주세요');
  };

  const EmailCode = e => {
    e.preventDefault();
    console.log(data);
    console.log(code);
    axios
      .post('/api/verifycode', {
        code,
        userEmail,
      })
      .then(response => {
        console.log(response);
        console.log(response.data.message);
        console.log(code);
      });
    if (codeon === false || data === 'ok') {
      alert('인증완료');
      setcodeon(true);
    } else {
      alert('다시 확인해 주세요.');
      setcodeon(false);
    }
  };
  const Click = e => {
    e.preventDefault();

    if (
      userName &&
      userIntroduce &&
      userAbility &&
      userArea &&
      userTime &&
      userInterestMain &&
      userInterestSub &&
      userREPW === userPW &&
      validator.isLength(userID, { min: 5, max: 20 }) === true &&
      validator.isLength(userPW, { min: 8, max: 20 }) === true &&
      validator.isEmail(userEmail) === true &&
      sameID === true &&
      sameNickname === true &&
      sameEmail === true
    ) {
      axios
        .post('/api/users/register', {
          userID,
          userPW,
          userNickname,
          userName,
          userEmail,
          userIntroduce,
          userAbility,
          userArea,
          userTime,
          userInterestMain,
          userInterestSub,
        })

        .then(response => {
          console.log(response.data.message);

          console.log(data);
          userData();
          alert('회원가입이 완료하였습니다.');
          window.location = '/login';
        })
        .catch(response => {
          alert('입력값을 다시 확인해주세요.');
        });
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>회원가입</Heading>

      <Box style={{ margin: 100, Box: 'center' }}>
        <Form.Field>
          <Form.Label>아이디</Form.Label>

          <Form.Control>
            <Form.Input
              type="text"
              placeholder="아이디"
              onChange={userIDdata}
              value={userID}
            />
          </Form.Control>
          {validator.isLength(userID, { min: 5, max: 20 }) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              5~20자로 사용하세요
            </Form.Label>
          )}
          <Button size="small" color="danger" onClick={sameIDButton}>
            중복확인
          </Button>
        </Form.Field>
        <br />
        <Form.Field>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="password"
              placeholder="비밀번호"
              onChange={userPWdata}
              value={userPW}
            />
          </Form.Control>
          {validator.isLength(userPW, { min: 8, max: 20 }) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              8~20자로 사용하세요
            </Form.Label>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Label>비밀번호 재확인</Form.Label>
          <Form.Control>
            <Form.Input
              type="password"
              placeholder="비밀번호 재확인"
              onChange={userREPWdata}
              value={userREPW}
            />
          </Form.Control>
        </Form.Field>
        <br />
        <Form.Field>
          <Form.Label>이름</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="이름"
              onChange={userNamedata}
              value={userName}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>닉네임</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="닉네임"
              onChange={userNicknamedata}
              value={userNickname}
            />
          </Form.Control>
          <Button
            mt="1"
            size="small"
            color="danger"
            onClick={sameNicknameButton}
          >
            중복확인
          </Button>
        </Form.Field>
        <br />
        <Form.Field>
          <Form.Label>자기소개</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="자기소개"
              onChange={userIntroducedata}
              value={userIntroduce}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              placeholder="이메일"
              onChange={userEmaildata}
              value={userEmail}
            />
          </Form.Control>

          {validator.isEmail(userEmail) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              이메일 형식이 아닙니다!
            </Form.Label>
          )}
          <Button size="small" color="danger" onClick={sameEmailButton}>
            중복확인
          </Button>
          <Button size="small" color="danger" onClick={EmailOnClick}>
            이메일 인증
          </Button>
          <Form.Control>
            <Form.Input
              type="emailcode"
              placeholder="이메일코드"
              onChange={codedata}
              value={code}
            />
          </Form.Control>
          <Button size="small" color="danger" onClick={EmailCode}>
            확인
          </Button>

          <div id="result" />
        </Form.Field>
        <br />

        <Form.Field>
          <Form.Label>실력</Form.Label>
          <Form.Control>
            <Form.Select onChange={userAbilitydata} value={userAbility}>
              <option value="">---------------------------</option>
              <option value="초심자">초심자</option>
              <option value="초보">초보</option>
              <option value="중수">중수</option>
              <option value="고수">고수</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>지역</Form.Label>
          <Form.Control>
            <Form.Select onChange={userAreadata} value={userArea}>
              <option value="">---------------------------</option>
              <option value="서울">서울</option>
              <option value="경기도">경기도</option>
              <option value="부산">부산</option>
              <option value="인천">인천</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="광주">광주</option>
              <option value="울산">울산</option>
              <option value="경상남도">경상남도</option>
              <option value="경상북도">경상북도</option>
              <option value="충청남도">충청남도</option>
              <option value="충청북도">충청북도</option>
              <option value="전라남도">전라남도</option>
              <option value="전라북도">전라북도</option>
              <option value="강원도">강원도</option>
              <option value="제주도">제주도</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>시간</Form.Label>
          <Form.Control>
            <Form.Select
              style={{ size: 'large' }}
              onChange={userTimedata}
              value={userTime}
            >
              <option value="">---------------------------</option>
              <option value="평일만가능">평일만가능</option>
              <option value="주말만가능">주말만가능</option>
              <option value="전부가능">전부가능</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>

        <div style={{ display: 'inline-block' }}>
          <Form.Field>
            <Form.Label>흥미</Form.Label>
            <Form.Control>
              <Form.Select
                onChange={userInterestMaindata}
                value={userInterestMain}
              >
                <option value="">---------------------------</option>
                {genOption(mainArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Form.Field>
            <Form.Control>
              <Form.Select
                onChange={userInterestSubdata}
                value={userInterestSub}
              >
                <option value="">---------------------------</option>
                {userInterestMain === '기획' && <>{genOption(planArray)}</>}
                {userInterestMain === '디자인' && <>{genOption(designArray)}</>}
                {userInterestMain === '프론트엔드개발' && (
                  <>{genOption(frontArray)}</>
                )}
                {userInterestMain === '백엔드개발' && (
                  <>{genOption(backArray)}</>
                )}
                {userInterestMain === '사업' && <>{genOption(coopArray)}</>}
                {userInterestMain === '기타' && <>{genOption(etcArray)}</>}
              </Form.Select>
            </Form.Control>
          </Form.Field>
        </div>

        <br />
        <br />
        <Button color="danger" size="medium" onClick={Click}>
          회원 가입
        </Button>
      </Box>
    </Container>
  );
};
