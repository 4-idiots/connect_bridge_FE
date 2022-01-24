import React, { useState } from 'react';
import * as S from './style';

export const FindIDForm = () => {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
  });

  const { userName, userPhone, userEmail } = userInfo;

  const onChangeAccountEvent = e => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <S.contatiner>
      <S.title>아이디 찾기</S.title>
      <S.form>
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
          휴대폰 번호
          <S.input
            type="text"
            value={userPhone}
            name="userPhone"
            onChange={onChangeAccountEvent}
            placeholder="ex) 01012345678"
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
