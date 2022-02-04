import axios from 'axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Block,
  Columns,
} from 'react-bulma-components';
import { Link } from 'react-router-dom';

export const SignupForm = () => {
  const [a, seta] = useState([]);
  const [userPhone, setuserPhone] = useState('');
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userNickname, setuserNickname] = useState('');
  const [userName, setuserName] = useState('');
  const [userBirthday, setuserBirthday] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userIntroduce, setuserIntroduce] = useState('');
  const [userGender, setuserGender] = useState(false);
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterest, setuserInterest] = useState('');

  const gett = () => {
    return axios.get('http://4idiot.ddns.net:8080/user').then(response => {
      console.log(response);
      seta(response.data);
    });
  };

  useEffect(() => {
    gett();
  }, []);

  const userPhonedata = e => {
    setuserPhone(e.target.value);
  };

  const userIDdata = e => {
    setuserID(e.target.value);
  };

  const userPWdata = e => {
    setuserPW(e.target.value);
  };

  const userNicknamedata = e => {
    setuserNickname(e.target.value);
  };

  const userNamedata = e => {
    setuserName(e.target.value);
  };

  const userBirthdaydata = e => {
    setuserBirthday(e.target.value);
  };

  const userEmaildata = e => {
    setuserEmail(e.target.value);
  };

  const userIntroducedata = e => {
    setuserIntroduce(e.target.value);
  };

  const userGenderdata = () => {
    setuserGender(current => current);
  };

  const userGenderdata2 = () => {
    setuserGender(current => !current);
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

  const userInterestdata = e => {
    setuserInterest(e.target.value);
  };

  const Click = e => {
    e.preventDefault();

    if (
      userNickname &&
      userName &&
      userIntroduce &&
      userAbility &&
      userArea &&
      userTime &&
      userInterest &&
      validator.isLength(userPhone, { min: 11, max: 11 }) === true &&
      validator.isLength(userID, { min: 5, max: 20 }) === true &&
      validator.isLength(userPW, { min: 8, max: 20 }) === true &&
      validator.isDate(userBirthday) === true &&
      validator.isEmail(userEmail) === true
    ) {
      alert('회원가입이 완료하였습니다.');
      window.location = '/login';

      axios
        .post('http://4idiot.ddns.net:8080/user/register', {
          userPhone,
          userID,
          userPW,
          userNickname,
          userName,
          userBirthday,
          userEmail,
          userIntroduce,
          userGender,
          userAbility,
          userArea,
          userTime,
          userInterest,
        })

        .then(response => {
          console.log(response);
          console.log(a);
          gett();
        });
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  return (
    <Container backgroundColor="success">
      <Heading style={{ textAlign: 'center' }}>회원가입</Heading>

      <Box style={{ width: '70%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>폰번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="ex.01012345678"
              onChange={userPhonedata}
              value={userPhone}
            />
          </Form.Control>
          {validator.isLength(userPhone, { min: 11, max: 11 }) ? (
            <Form.Label style={{ color: 'green' }}>O</Form.Label>
          ) : (
            <Form.Label style={{ size: 'medium', color: 'red' }}>
              보기와 맞게 기입해 주세요
            </Form.Label>
          )}
        </Form.Field>
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
            <Form.Label style={{ color: 'green' }}>O</Form.Label>
          ) : (
            <Form.Label style={{ size: 'medium', color: 'red' }}>
              5~20자로 사용하세요
            </Form.Label>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="비밀번호"
              onChange={userPWdata}
              value={userPW}
            />
          </Form.Control>
          {validator.isLength(userPW, { min: 8, max: 20 }) ? (
            <Form.Label style={{ color: 'green' }}>O</Form.Label>
          ) : (
            <Form.Label style={{ size: 'medium', color: 'red' }}>
              8~20자로 사용하세요
            </Form.Label>
          )}
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
        <br />
        <Form.Field>
          <Form.Label>생년월일</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="ex.1998-10-23"
              onChange={userBirthdaydata}
              value={userBirthday}
            />
          </Form.Control>
          {validator.isDate(userBirthday) ? (
            <Form.Label style={{ color: 'green' }}>O</Form.Label>
          ) : (
            <Form.Label style={{ size: 'medium', color: 'red' }}>
              보기와 맞게 기입해 주세요
            </Form.Label>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="이메일"
              onChange={userEmaildata}
              value={userEmail}
            />
          </Form.Control>
          {validator.isEmail(userEmail) ? (
            <Form.Label style={{ color: 'green' }}>O</Form.Label>
          ) : (
            <Form.Label style={{ color: 'red' }}>이메일이 아닙니다!</Form.Label>
          )}
        </Form.Field>
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
        <br />
        <Form.Field>
          <Form.Label>성별</Form.Label>
          <Form.Control>
            <Form.Radio
              type="radio"
              name="Gender"
              onChange={userGenderdata}
              value={userGender}
            >
              남
            </Form.Radio>
            <br />
            <Form.Radio
              type="radio"
              name="Gender"
              onChange={userGenderdata2}
              value={userGender}
            >
              여
            </Form.Radio>
          </Form.Control>
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

        <Form.Field>
          <Form.Label>흥미</Form.Label>
          <Form.Control>
            <Form.Select onChange={userInterestdata} value={userInterest}>
              <option value="">---------------------------</option>
              <option value="기획">기획</option>
              <option value="디자인">디자인</option>
              <option value="프론트엔드">프론트엔드</option>
              <option value="백엔드">백엔드</option>
              <option value="기타">기타</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>
        <br />
        <br />
        <Button color="danger" size="medium" onClick={Click}>
          회원 가입
        </Button>
      </Box>
    </Container>
  );
};
