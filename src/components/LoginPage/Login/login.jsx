import React, { useState } from 'react';
// import axios from 'axios';
import * as S from './style';

export const LoginForm = () => {
  const [account, setAccount] = useState({
    userID: '',
    userPW: '',
  });

  const { userID, userPW } = account;

  const onChangeAccountEvent = e => {
    setAccount({
      ...account,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(account);
    // axios.post('', { userID, userPW }).then(response => {
    //   console.log(response);
    // });
  };

  return (
    <S.contatiner>
      <S.title>로그인</S.title>
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
          비밀번호
          <S.input
            type="password"
            value={userPW}
            name="userPW"
            onChange={onChangeAccountEvent}
            placeholder="비밀번호"
          />
        </S.label>
        <S.submit onClick={onSubmitEvent}>로그인</S.submit>
      </S.form>
      <S.serviceBox>
        <S.serviceBtn service="register" to="/signup">
          회원가입
        </S.serviceBtn>
        <S.serviceBtn service="findID" to="/login/findID">
          아이디 찾기
        </S.serviceBtn>
        <S.serviceBtn service="findPW" to="/login/findPW">
          비밀번호 찾기
        </S.serviceBtn>
      </S.serviceBox>
    </S.contatiner>
  );
};
