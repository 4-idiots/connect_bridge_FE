import React, { useState } from 'react';
import { Heading, Button } from 'react-bulma-components';
import { MyPageInput, MyPageSelect, MyPageImg } from './userInfo/infoRoute';
import * as S from './userInfo/style';

export const MyPageForm = () => {
  const [user, setUser] = useState({
    email: 'email',
    phone: 'phone',
    nickname: 'nickname',
    introduce: 'introduce',
    portfolio: 'portfolio',
    onOff: '온라인/오프라인 모두가능',
    area: '서울특별시',
    time: '상관없음',
    main: '',
    mSkill: '',
    mPro: '',
    preview:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png',
    profileImg: '',
  });

  const {
    email,
    phone,
    nickname,
    introduce,
    portfolio,
    onOff,
    area,
    time,
    main,
    mSkill,
    mPro,
    profileImg,
  } = user;

  const onChangeInput = e => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <>
      <MyPageImg user={user} setUser={setUser} />
      <S.InfoBox>
        <MyPageInput
          label="이메일"
          value={email}
          name="email"
          onChange={onChangeInput}
          disabled
        />
        <MyPageInput
          label="휴대폰번호"
          value={phone}
          name="phone"
          onChange={onChangeInput}
          disabled
        />
        <MyPageInput
          label="닉네임"
          value={nickname}
          name="nickname"
          onChange={onChangeInput}
        />
        <MyPageInput
          label="자기소개"
          value={introduce}
          name="introduce"
          onChange={onChangeInput}
        />
        <MyPageInput
          label="포트폴리오"
          value={portfolio}
          name="portfolio"
          onChange={onChangeInput}
        />

        <MyPageSelect
          type="본 캐릭터 직무/능력치"
          onChange={setUser}
          user={user}
        />
        <MyPageSelect type="지역 및 시간 설정" onChange={setUser} user={user} />

        <Button.Group align="center">
          <Button
            color="success"
            onClick={() => {
              console.log(user);
            }}
          >
            수정하기
          </Button>
        </Button.Group>
      </S.InfoBox>
    </>
  );
};
