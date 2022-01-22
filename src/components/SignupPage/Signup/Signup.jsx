import axios from 'axios';
import React, { useState, useEffect } from 'react';

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

  const gett = () => {
    return axios.get('/user').then(response => {
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

  const Click = e => {
    e.preventDefault();

    axios
      .post('/user/register', {
        userPhone,
        userID,
        userPW,
        userNickname,
        userName,
        userBirthday,
        userEmail,
        userIntroduce,
      })

      .then(response => {
        console.log(response);
        console.log(a);
        gett();
      });
  };

  return (
    <div className="signup">
      <form>
        <input
          type="text"
          placeholder="폰번호(ex.01012345678)"
          onChange={userPhonedata}
          value={userPhone}
        />
        <br />
        <input
          type="text"
          placeholder="아이디"
          onChange={userIDdata}
          value={userID}
        />
        <br />
        <input
          type="text"
          placeholder="비번"
          onChange={userPWdata}
          value={userPW}
        />
        <br />
        <input
          type="text"
          placeholder="닉네임"
          onChange={userNicknamedata}
          value={userNickname}
        />
        <br />
        <input
          type="text"
          placeholder="이름"
          onChange={userNamedata}
          value={userName}
        />
        <br />
        <input
          type="text"
          placeholder="생일(ex.10.23)"
          onChange={userBirthdaydata}
          value={userBirthday}
        />
        <br />
        <input
          type="text"
          placeholder="이메일"
          onChange={userEmaildata}
          value={userEmail}
        />
        <br />
        <input
          type="text"
          placeholder="자기소개"
          onChange={userIntroducedata}
          value={userIntroduce}
        />
        <br />

        <br />
        <button type="button" onClick={Click}>
          회원가입
        </button>
      </form>
    </div>
  );
};
