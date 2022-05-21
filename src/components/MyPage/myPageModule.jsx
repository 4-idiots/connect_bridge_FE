import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bulma-components';
import validator from 'validator';
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { MyPageInput, MyPageSelect, MyPageImg } from './userInfo/infoRoute';
import * as S from './userInfo/style';
import * as Send from '../../services/mypageService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { SkelInfo } from '../skeleton/mypage/mypageRouter';
import { getData, updateFormData } from '../../RefactorFunc/dataControl';

export const MyPageForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [pwInfo, setPwInfo] = useState({ userPW: '', pwCheck: '' });
  const [check, setCheck] = useState({
    nickCheck: true,
    nickClick: false,
    nickChange: false,
    imgChange: false,
  });

  const onNickChangeInput = e => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
    setCheck({ ...check, nickChange: true });
  };

  const onChangeInput = e => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onChangePW = e => {
    setPwInfo({ ...pwInfo, [e.currentTarget.name]: e.currentTarget.value });
  };

  const checkNickname = async nick => {
    try {
      const result = await Send.myCheckNickname(nick);
      setCheck({ ...check, nickCheck: result.data, nickClick: true });
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  const updateNoImgAxios = async () => {
    try {
      await Send.mypageUpdatePost(
        decodedToken.id,
        pwInfo.userPW,
        user.userNickname,
        user.userIntroduce,
        user.userAbility,
        user.userArea,
        user.userTime,
        user.userInterestMain,
        user.userInterestSub,
        user.userPortfolio,
      );
      window.location.replace('/my/info');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('id', decodedToken.id);
    formData.append('userPW', pwInfo.userPW);
    formData.append('userNickname', user.userNickname);
    formData.append('userIntroduce', user.userIntroduce);
    formData.append('userAbility', user.userAbility);
    formData.append('userArea', user.userArea);
    formData.append('userTime', user.userTime);
    formData.append('userInterestMain', user.userInterestMain);
    formData.append('userInterestSub', user.userInterestSub);
    formData.append('userPortfolio', user.userPortfolio);
    formData.append('img', user.userPicture);

    if (
      check.nickChange &&
      check.nickCheck === false &&
      check.nickClick &&
      check.imgChange
    ) {
      updateFormData(formData, '/my/info', Send.mypageUpdate, navigate);
    } else if (check.nickChange === false && check.imgChange) {
      updateFormData(formData, '/my/info', Send.mypageUpdate, navigate);
    } else if (check.imgChange === false) {
      updateNoImgAxios();
    } else {
      alert('입력을 확인해주세요');
    }
  };

  useEffect(() => {
    getData(setLoading, setUser, Send.myGetUser);
  }, []);

  if (user && !loading) {
    return (
      <>
        <MyPageImg
          user={user}
          setUser={setUser}
          setCheck={setCheck}
          check={check}
        />
        <S.InfoBox>
          <MyPageInput
            label="이메일"
            value={user.userEmail}
            name="userEmail"
            onChange={onChangeInput}
            disabled
          />
          <MyPageInput
            label="아이디"
            value={user.userID}
            name="userID"
            onChange={onChangeInput}
            disabled
          />
          <Form.Field>
            <Form.Label>닉네임</Form.Label>
            <Form.Control>
              <Form.Input
                placeholder="닉네임"
                value={user.userNickname}
                name="userNickname"
                onChange={onNickChangeInput}
              />
              {check.nickClick ? (
                <div>
                  {check.nickCheck ? (
                    <Form.Help style={{ color: 'red' }}>
                      * 다른 닉네임을 사용해주세요
                    </Form.Help>
                  ) : (
                    <Form.Help style={{ color: 'green' }}>
                      * 사용 가능합니다.
                    </Form.Help>
                  )}
                </div>
              ) : (
                <Form.Help style={{ color: 'red' }}>
                  * 변경하려면 닉네임 중복을 확인해주세요
                </Form.Help>
              )}
              <Button
                style={{ width: 60, fontSize: 14, margin: '8px 0 4px 0' }}
                color="danger"
                onClick={() => checkNickname(user.userNickname)}
              >
                중복 확인
              </Button>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Form.Input
                placeholder="비밀번호"
                value={pwInfo.userPW}
                name="userPW"
                onChange={onChangePW}
                type="password"
              />
              {validator.isLength(pwInfo.userPW, { min: 8, max: 20 }) ? (
                <Form.Help style={{ color: 'green' }}>
                  * 사용 가능한 비밀번호입니다.
                </Form.Help>
              ) : (
                <Form.Help style={{ color: 'red' }}>
                  * 8~20자로 사용해주세요
                </Form.Help>
              )}
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control>
              <Form.Input
                placeholder="비밀번호 확인"
                value={pwInfo.pwCheck}
                name="pwCheck"
                onChange={onChangePW}
                type="password"
              />
              {validator.equals(pwInfo.userPW, pwInfo.pwCheck) ? (
                <Form.Help style={{ color: 'green' }}>* 일치합니다.</Form.Help>
              ) : (
                <Form.Help style={{ color: 'red' }}>
                  * 비밀번호가 일치하지 않습니다.
                </Form.Help>
              )}
            </Form.Control>
          </Form.Field>
          <MyPageInput
            label="자기소개"
            value={user.userIntroduce}
            name="userIntroduce"
            onChange={onChangeInput}
          />
          <MyPageInput
            label="포트폴리오"
            value={user.userPortfolio}
            name="userPortfolio"
            onChange={onChangeInput}
          />

          <MyPageSelect
            type="본 캐릭터 직무/능력치"
            onChange={setUser}
            user={user}
          />
          <MyPageSelect
            type="지역 및 시간 설정"
            onChange={setUser}
            user={user}
          />

          <Button.Group align="center">
            <Button color="success" onClick={onSubmit}>
              수정하기
            </Button>
          </Button.Group>
        </S.InfoBox>
      </>
    );
  }
  return <SkelInfo />;
};
