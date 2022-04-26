import React, { useState } from 'react';
import { Container, Heading, Button } from 'react-bulma-components';
import { MyPageInput, MyPageSelect } from './userInfo/infoRoute';
import * as S from './userInfo/style';

export const MyPageForm = () => {
  const [user, setUser] = useState({
    email: 'email',
    phone: 'phone',
    nickname: 'nickname',
    introduce: 'introduce',
    portfolio: 'portfolio',
    onOff: '온라인/오프라인 모두가능',
    area: '상관없음',
    time: '상관없음',
    main: '프론트엔드개발',
    mSkill: 'IOS',
    mPro: '중수',
    sub: '기획',
    sSkill: 'UI/UX기획',
    sPro: '고수',
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
    sub,
    sSkill,
    sPro,
  } = user;

  const onChangeInput = e => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <Container style={{ marginTop: 80 }}>
      <Heading style={{ textAlign: 'center' }}>마이 페이지</Heading>
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
          onChange={onChangeInput}
          main={main}
          mSkill={mSkill}
          mPro={mPro}
        />
        <MyPageSelect
          type="부 캐릭터 직무/능력치"
          onChange={onChangeInput}
          sub={sub}
          sSkill={sSkill}
          sPro={sPro}
        />
        <MyPageSelect type="지역 및 시간 설정" onChange={onChangeInput} />

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
    </Container>
  );
};
