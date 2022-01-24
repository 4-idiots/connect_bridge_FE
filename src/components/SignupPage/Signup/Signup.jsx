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
  const [userGender, setuserGender] = useState(false);
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterest, setuserInterest] = useState('');

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
        <input
          type="radio"
          name="Gender"
          onChange={userGenderdata}
          value={userGender}
        />
        남성
        <input
          type="radio"
          name="Gender"
          onChange={userGenderdata2}
          value={userGender}
        />
        여성
        <br />
        <select onChange={userAbilitydata} value={userAbility}>
          <option value="">-----</option>
          <option value="초등">초등</option>
          <option value="중등">중등</option>
          <option value="고등">고등</option>
        </select>
        <br />
        <select onChange={userAreadata} value={userArea}>
          <option value="">-----</option>
          <option value="서울">서울</option>
          <option value="대구">대구</option>
          <option value="부산">부산</option>
        </select>
        <br />
        <select onChange={userTimedata} value={userTime}>
          <option value="">-----</option>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
          <option value="밤">밤</option>
        </select>
        <br />
        <select onChange={userInterestdata} value={userInterest}>
          <option value="">-----</option>
          <option value="흥">흥</option>
          <option value="흥">흥</option>
          <option value="미">미</option>
        </select>
        <br />
        <button type="button" onClick={Click}>
          회원가입
        </button>
      </form>
    </div>
  );
};
