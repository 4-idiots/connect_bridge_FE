import React, { useState } from 'react';
import * as S from './style';

export const FindPWForm = () => {
  const [userInfo, setUserInfo] = useState({
    userID: '',
    userName: '',
    userEmail: '',
  });

  const { userID, userName, userEmail } = userInfo;

  const onChangeAccountEvent = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(userInfo);
    // axios.post('', { userID, userName, userEmail }).then(response => {
    //   console.log(response);
    // });
  };

  return (
    <S.contatiner>
      <S.title>비밀번호 찾기</S.title>
      <S.form>
        <S.label>
          아이디
          <S.input
            type="text"
            value={userID}
            name="userID"
            onChange={onChangeAccountEvent}
            placeholder="아이디"
          />
        </S.label>
        <S.label>
          이름
          <S.input
            type="text"
            value={userName}
            name="userName"
            onChange={onChangeAccountEvent}
            placeholder="이름"
          />
        </S.label>
        <S.label>
          이메일
          <S.input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={onChangeAccountEvent}
            placeholder="이메일"
          />
        </S.label>
        <S.submit onClick={onSubmitEvent}>아이디 찾기</S.submit>
      </S.form>
    </S.contatiner>
  );
};
