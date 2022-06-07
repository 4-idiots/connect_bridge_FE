/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import * as Arr from '../ProjectPage/uploadComponent/uploadValue';
import * as Send from '../../services/signUpService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const SignupForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [emLoading, setEmLoading] = useState(false);
  const [userData, setUserData] = useState({
    userID: '',
    userPW: '',
    userNickname: '',
    userName: '',
    userEmail: '',
    userIntroduce: '',
    userAbility: '',
    userArea: '',
    userTime: '',
    userInterestMain: '',
    userInterestSub: '',
    userREPW: '',
    userPortfolio: '',
    sameID: true,
    sameNickname: true,
    sameEmail: true,
    code: '',
    codeon: '',
  });

  const regexpID = /^[A-za-z0-9+]{5,20}$/;
  const regexKR = /^[|가-힣|+]{2,10}$/;

  const onChangeAccountEvent = e => {
    setUserData({
      ...userData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

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

  const sameIDButton = async () => {
    try {
      const result = await Send.checkSameID(userData.userID);
      if (result.data) {
        alert('중복입니다. 다시 입력해주세요');
      } else {
        alert('중복이 아닙니다.');
      }
      setUserData({ ...userData, sameID: result.data });
    } catch (error) {
      // pass
    }
  };

  const sameNicknameButton = async () => {
    try {
      const result = await Send.checkSameNickname(userData.userNickname);
      if (result.data) {
        alert('중복입니다. 다시 입력해주세요');
      } else {
        alert('중복이 아닙니다.');
      }
      setUserData({ ...userData, sameNickname: result.data });
    } catch (error) {
      // pass
    }
  };

  const SameEmailButton = async () => {
    try {
      const result = await Send.checkSameEmail(userData.userEmail);
      if (result.data) {
        alert('중복입니다. 다시 입력해주세요.');
      } else {
        alert('중복이 아닙니다.');
      }
      setUserData({ ...userData, sameEmail: result.data });
    } catch (error) {
      // pass
    }
  };

  const EmailOnClick = async () => {
    setEmLoading(true);
    if (!userData.sameEmail) {
      try {
        await Send.issueEmailCode(userData.userEmail);
        setEmLoading(false);
        alert('이메일을 확인해주세요');
      } catch (error) {
        setEmLoading(false);
      }
    } else alert('이메일 중복 체크를 해주세요');
  };

  const EmailCode = async () => {
    try {
      await Send.checkEmailCode(userData.code, userData.userEmail);
      alert('인증완료');
      setUserData({ ...userData, codeon: true });
    } catch (error) {
      alert('다시 확인해 주세요.');
      setUserData({ ...userData, codeon: false });
    }
  };

  const Click = async () => {
    if (
      regexKR.test(userData.userName) &&
      userData.userPortfolio &&
      userData.userIntroduce &&
      userData.userAbility &&
      userData.userArea &&
      userData.userTime &&
      userData.userInterestMain &&
      userData.userInterestSub &&
      validator.equals(userData.userPW, userData.userREPW) &&
      regexpID.test(userData.userID) &&
      validator.isStrongPassword(userData.userPW, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      }) &&
      validator.isEmail(userData.userEmail) &&
      !userData.sameID &&
      !userData.sameNickname &&
      !userData.sameEmailtrue
    ) {
      try {
        await Send.register(
          userData.userID,
          userData.userPW,
          userData.userNickname,
          userData.userName,
          userData.userEmail,
          userData.userIntroduce,
          userData.userAbility,
          userData.userArea,
          userData.userTime,
          userData.userInterestMain,
          userData.userInterestSub,
          userData.userPortfolio,
        );
        alert('회원가입이 완료하였습니다.');
        navigate('/login');
      } catch (error) {
        // pass
      }
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  useEffect(() => {
    if (decodedToken) {
      navigate('/');
    }
  }, [decodedToken]);

  return (
    <Container style={{ marginTop: 80 }}>
      <Mobile>
        <Heading style={{ textAlign: 'center', margin: 10 }}>회원가입</Heading>
        <Box style={{ margin: 15, Box: 'center' }}>
          <Form.Field>
            <Form.Label>아이디</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="영문 또는 숫자를 사용하여 5~20자로 입력하세요"
                name="userID"
                onChange={onChangeAccountEvent}
                value={userData.userID}
              />
            </Form.Control>
            {regexpID.test(userData.userID) ? (
              <>
                {userData.sameID ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    아이디 중복을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                영문 또는 숫자를 사용하여 5~20자로 입력하세요
              </Form.Label>
            )}
            <Button
              className="button is-outlined"
              size="small"
              color=""
              onClick={sameIDButton}
            >
              중복확인
            </Button>
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="대소문자를 포함한 8~20자로 입력하세요"
                name="userPW"
                onChange={onChangeAccountEvent}
                value={userData.userPW}
              />
            </Form.Control>
            {validator.isStrongPassword(userData.userPW, {
              minLength: 8,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 0,
            }) ? (
              <Form.Label style={{ color: 'green' }} size="small">
                사용 가능합니다.
              </Form.Label>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                대소문자를 포함한 8~20자로 입력하세요
              </Form.Label>
            )}
          </Form.Field>
          <Form.Field>
            <Form.Label>비밀번호 재확인</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="비밀번호 재확인"
                onChange={onChangeAccountEvent}
                name="userREPW"
                value={userData.userREPW}
              />
            </Form.Control>
          </Form.Field>
          {validator.equals(userData.userPW, userData.userREPW) &&
          userData.userPW.length !== 0 ? (
            <Form.Label style={{ color: 'green' }} size="small">
              비밀번호가 일치합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              비밀번호가 일치하지 않습니다.
            </Form.Label>
          )}
          <br />
          <Form.Field>
            <Form.Label>이름</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="한글 이름을 입력해주세요"
                name="userName"
                onChange={onChangeAccountEvent}
                value={userData.userName}
              />
            </Form.Control>
          </Form.Field>
          {regexKR.test(userData.userName) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              감사합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              한글 이름을 입력해주세요
            </Form.Label>
          )}

          <Form.Field>
            <Form.Label>닉네임</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="대소문자, 한글, 숫자"
                name="userNickname"
                onChange={onChangeAccountEvent}
                value={userData.userNickname}
              />
            </Form.Control>
            {userData.userNickname.length ? (
              <>
                {userData.sameNickname ? (
                  <Form.Label size="small" style={{ color: '#ff6347' }}>
                    닉네임 중복 또는 양식을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label size="small" style={{ color: 'green' }}>
                    사용가능한 닉네임입니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                닉네임을 입력해주세요
              </Form.Label>
            )}
            <Button mt="1" size="small" color="" onClick={sameNicknameButton}>
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
                name="userIntroduce"
                onChange={onChangeAccountEvent}
                value={userData.userIntroduce}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>간단한 포트폴리오</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="github/velog ...."
                name="userPortfolio"
                onChange={onChangeAccountEvent}
                value={userData.userPortfolio}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label size="small">&nbsp;&nbsp;</Form.Label>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Form.Input
                type="email"
                placeholder="이메일"
                name="userEmail"
                onChange={onChangeAccountEvent}
                value={userData.userEmail}
              />
            </Form.Control>
            {validator.isEmail(userData.userEmail) ? (
              <>
                {userData.sameEmail ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    중복확인을 해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                이메일 형식이 아닙니다
              </Form.Label>
            )}
            <Button size="small" color="" onClick={SameEmailButton}>
              중복확인
            </Button>
            &nbsp;&nbsp;
            <Button size="small" color="" onClick={EmailOnClick}>
              {emLoading ? (
                <ReactLoading type="bubbles" color="#bdbdbd" />
              ) : (
                '이메일 인증'
              )}
            </Button>
            <Form.Control>
              <br />
              <Form.Input
                type="emailcode"
                placeholder="이메일 발급코드"
                name="code"
                onChange={onChangeAccountEvent}
                value={userData.code}
              />
            </Form.Control>
            {userData.codeon ? (
              <Form.Label size="small" style={{ color: 'green' }}>
                확인되었습니다
              </Form.Label>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                이메일을 확인해주세요
              </Form.Label>
            )}
            <Button size="small" color="" onClick={EmailCode}>
              확인
            </Button>
            <div id="result" />
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>능력</Form.Label>
            <Form.Control>
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userAbility"
                value={userData.userAbility}
              >
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
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userArea"
                value={userData.userArea}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.areaArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>시간</Form.Label>
            <Form.Control>
              <Form.Select
                style={{ size: 'large' }}
                onChange={onChangeAccountEvent}
                name="userTime"
                value={userData.userTime}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.onOffArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Label>직무</Form.Label>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestMain"
                  value={userData.userInterestMain}
                >
                  <option value="">---------------------------</option>
                  {genOption(Arr.mainArray)}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestSub"
                  value={userData.userInterestSub}
                >
                  <option value="">---------------------------</option>
                  {userData.userInterestMain === '기획' && (
                    <>{genOption(Arr.planArray)}</>
                  )}
                  {userData.userInterestMain === '디자인' && (
                    <>{genOption(Arr.designArray)}</>
                  )}
                  {userData.userInterestMain === '프론트엔드개발' && (
                    <>{genOption(Arr.frontArray)}</>
                  )}
                  {userData.userInterestMain === '백엔드개발' && (
                    <>{genOption(Arr.backArray)}</>
                  )}
                  {userData.userInterestMain === '사업' && (
                    <>{genOption(Arr.coopArray)}</>
                  )}
                  {userData.userInterestMain === '기타' && (
                    <>{genOption(Arr.etcArray)}</>
                  )}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <br />
          <br />
          <div>
            <Button
              style={{ fontWeight: 'bolder' }}
              className="button is-medium is-fullwidth"
              onClick={Click}
            >
              가입하기
            </Button>
          </div>
        </Box>
      </Mobile>
      <Tablet>
        <Heading style={{ textAlign: 'center', margin: 10 }}>회원가입</Heading>
        <Box style={{ margin: 45, Box: 'center' }}>
          <Form.Field>
            <Form.Label>아이디</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="영문 또는 숫자를 사용하여 5~20자로 입력하세요"
                name="userID"
                onChange={onChangeAccountEvent}
                value={userData.userID}
              />
            </Form.Control>
            {regexpID.test(userData.userID) ? (
              <>
                {userData.sameID ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    아이디 중복을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                영문 또는 숫자를 사용하여 5~20자로 입력하세요
              </Form.Label>
            )}
            <Button
              className="button is-outlined"
              size="small"
              color=""
              onClick={sameIDButton}
            >
              중복확인
            </Button>
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="대소문자를 포함한 8~20자로 입력하세요"
                name="userPW"
                onChange={onChangeAccountEvent}
                value={userData.userPW}
              />
            </Form.Control>
            {validator.isStrongPassword(userData.userPW, {
              minLength: 8,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 0,
            }) ? (
              <Form.Label style={{ color: 'green' }} size="small">
                사용 가능합니다.
              </Form.Label>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                대소문자를 포함한 8~20자로 입력하세요
              </Form.Label>
            )}
          </Form.Field>
          <Form.Field>
            <Form.Label>비밀번호 재확인</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="비밀번호 재확인"
                onChange={onChangeAccountEvent}
                name="userREPW"
                value={userData.userREPW}
              />
            </Form.Control>
          </Form.Field>
          {validator.equals(userData.userPW, userData.userREPW) &&
          userData.userPW.length !== 0 ? (
            <Form.Label style={{ color: 'green' }} size="small">
              비밀번호가 일치합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              비밀번호가 일치하지 않습니다.
            </Form.Label>
          )}
          <br />
          <Form.Field>
            <Form.Label>이름</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="한글 이름을 입력해주세요"
                name="userName"
                onChange={onChangeAccountEvent}
                value={userData.userName}
              />
            </Form.Control>
          </Form.Field>
          {regexKR.test(userData.userName) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              감사합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              한글 이름을 입력해주세요
            </Form.Label>
          )}
          <Form.Field>
            <Form.Label>닉네임</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="대소문자, 한글, 숫자"
                name="userNickname"
                onChange={onChangeAccountEvent}
                value={userData.userNickname}
              />
            </Form.Control>
            {userData.userNickname.length ? (
              <>
                {userData.sameNickname ? (
                  <Form.Label size="small" style={{ color: '#ff6347' }}>
                    닉네임 중복 또는 양식을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label size="small" style={{ color: 'green' }}>
                    사용가능한 닉네임입니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                닉네임을 입력해주세요
              </Form.Label>
            )}
            <Button mt="1" size="small" color="" onClick={sameNicknameButton}>
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
                name="userIntroduce"
                onChange={onChangeAccountEvent}
                value={userData.userIntroduce}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>간단한 포트폴리오</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="github/velog ...."
                name="userPortfolio"
                onChange={onChangeAccountEvent}
                value={userData.userPortfolio}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label size="small">&nbsp;&nbsp;</Form.Label>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Form.Input
                type="email"
                placeholder="이메일"
                name="userEmail"
                onChange={onChangeAccountEvent}
                value={userData.userEmail}
              />
            </Form.Control>
            {validator.isEmail(userData.userEmail) ? (
              <>
                {userData.sameEmail ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    중복확인을 해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                이메일 형식이 아닙니다
              </Form.Label>
            )}
            <Button size="small" color="" onClick={SameEmailButton}>
              중복확인
            </Button>
            &nbsp;&nbsp;
            <Button size="small" color="" onClick={EmailOnClick}>
              이메일 인증
            </Button>
            <Form.Control>
              <br />
              <Form.Input
                type="emailcode"
                placeholder="이메일 발급코드"
                name="code"
                onChange={onChangeAccountEvent}
                value={userData.code}
              />
            </Form.Control>
            {userData.codeon ? (
              <Form.Label size="small" style={{ color: 'green' }}>
                확인되었습니다
              </Form.Label>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                이메일을 확인해주세요
              </Form.Label>
            )}
            <Button size="small" color="" onClick={EmailCode}>
              확인
            </Button>
            <div id="result" />
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>능력</Form.Label>
            <Form.Control>
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userAbility"
                value={userData.userAbility}
              >
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
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userArea"
                value={userData.userArea}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.areaArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>시간</Form.Label>
            <Form.Control>
              <Form.Select
                style={{ size: 'large' }}
                onChange={onChangeAccountEvent}
                name="userTime"
                value={userData.userTime}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.onOffArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Label>직무</Form.Label>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestMain"
                  value={userData.userInterestMain}
                >
                  <option value="">---------------------------</option>
                  {genOption(Arr.mainArray)}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestSub"
                  value={userData.userInterestSub}
                >
                  <option value="">---------------------------</option>
                  {userData.userInterestMain === '기획' && (
                    <>{genOption(Arr.planArray)}</>
                  )}
                  {userData.userInterestMain === '디자인' && (
                    <>{genOption(Arr.designArray)}</>
                  )}
                  {userData.userInterestMain === '프론트엔드개발' && (
                    <>{genOption(Arr.frontArray)}</>
                  )}
                  {userData.userInterestMain === '백엔드개발' && (
                    <>{genOption(Arr.backArray)}</>
                  )}
                  {userData.userInterestMain === '사업' && (
                    <>{genOption(Arr.coopArray)}</>
                  )}
                  {userData.userInterestMain === '기타' && (
                    <>{genOption(Arr.etcArray)}</>
                  )}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <br />
          <br />
          <div>
            <Button
              style={{ fontWeight: 'bolder' }}
              className="button is-medium is-fullwidth"
              onClick={Click}
            >
              가입하기
            </Button>
          </div>
        </Box>
      </Tablet>
      <Desktop>
        <Heading style={{ textAlign: 'center', margin: 10 }}>회원가입</Heading>
        <Box style={{ margin: 100, Box: 'center' }}>
          <Form.Field>
            <Form.Label>아이디</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="영문 또는 숫자를 사용하여 5~20자로 입력하세요"
                name="userID"
                onChange={onChangeAccountEvent}
                value={userData.userID}
              />
            </Form.Control>
            {regexpID.test(userData.userID) ? (
              <>
                {userData.sameID ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    아이디 중복을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                영문 또는 숫자를 사용하여 5~20자로 입력하세요
              </Form.Label>
            )}
            <Button
              className="button is-outlined"
              size="small"
              color=""
              onClick={sameIDButton}
            >
              중복확인
            </Button>
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="대소문자를 포함한 8~20자로 입력하세요"
                name="userPW"
                onChange={onChangeAccountEvent}
                value={userData.userPW}
              />
            </Form.Control>
            {validator.isStrongPassword(userData.userPW, {
              minLength: 8,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 0,
            }) ? (
              <Form.Label style={{ color: 'green' }} size="small">
                사용 가능합니다.
              </Form.Label>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                대소문자를 포함한 8~20자로 입력하세요
              </Form.Label>
            )}
          </Form.Field>
          <Form.Field>
            <Form.Label>비밀번호 재확인</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                placeholder="비밀번호 재확인"
                onChange={onChangeAccountEvent}
                name="userREPW"
                value={userData.userREPW}
              />
            </Form.Control>
          </Form.Field>
          {validator.equals(userData.userPW, userData.userREPW) &&
          userData.userPW.length !== 0 ? (
            <Form.Label style={{ color: 'green' }} size="small">
              비밀번호가 일치합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              비밀번호가 일치하지 않습니다.
            </Form.Label>
          )}
          <br />
          <Form.Field>
            <Form.Label>이름</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="한글 이름을 입력해주세요"
                name="userName"
                onChange={onChangeAccountEvent}
                value={userData.userName}
              />
            </Form.Control>
          </Form.Field>
          {regexKR.test(userData.userName) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              감사합니다.
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              한글 이름을 입력해주세요
            </Form.Label>
          )}
          <Form.Field>
            <Form.Label>닉네임</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="대소문자, 한글, 숫자"
                name="userNickname"
                onChange={onChangeAccountEvent}
                value={userData.userNickname}
              />
            </Form.Control>
            {userData.userNickname.length ? (
              <>
                {userData.sameNickname ? (
                  <Form.Label size="small" style={{ color: '#ff6347' }}>
                    닉네임 중복 또는 양식을 확인해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label size="small" style={{ color: 'green' }}>
                    사용가능한 닉네임입니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                닉네임을 입력해주세요
              </Form.Label>
            )}
            <Button mt="1" size="small" color="" onClick={sameNicknameButton}>
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
                name="userIntroduce"
                onChange={onChangeAccountEvent}
                value={userData.userIntroduce}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>간단한 포트폴리오</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="github/velog ...."
                name="userPortfolio"
                onChange={onChangeAccountEvent}
                value={userData.userPortfolio}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label size="small">&nbsp;&nbsp;</Form.Label>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Form.Input
                type="email"
                placeholder="이메일"
                name="userEmail"
                onChange={onChangeAccountEvent}
                value={userData.userEmail}
              />
            </Form.Control>
            {validator.isEmail(userData.userEmail) ? (
              <>
                {userData.sameEmail ? (
                  <Form.Label style={{ color: '#ff6347' }} size="small">
                    중복확인을 해주세요.
                  </Form.Label>
                ) : (
                  <Form.Label style={{ color: 'green' }} size="small">
                    사용 가능합니다.
                  </Form.Label>
                )}
              </>
            ) : (
              <Form.Label style={{ color: '#ff6347' }} size="small">
                이메일 형식이 아닙니다
              </Form.Label>
            )}
            <Button size="small" color="" onClick={SameEmailButton}>
              중복확인
            </Button>
            &nbsp;&nbsp;
            <Button size="small" color="" onClick={EmailOnClick}>
              이메일 인증
            </Button>
            <Form.Control>
              <br />
              <Form.Input
                type="emailcode"
                placeholder="이메일 발급코드"
                name="code"
                onChange={onChangeAccountEvent}
                value={userData.code}
              />
            </Form.Control>
            {userData.codeon ? (
              <Form.Label size="small" style={{ color: 'green' }}>
                확인되었습니다
              </Form.Label>
            ) : (
              <Form.Label size="small" style={{ color: '#ff6347' }}>
                이메일을 확인해주세요
              </Form.Label>
            )}
            <Button size="small" color="" onClick={EmailCode}>
              확인
            </Button>
            <div id="result" />
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Label>능력</Form.Label>
            <Form.Control>
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userAbility"
                value={userData.userAbility}
              >
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
              <Form.Select
                onChange={onChangeAccountEvent}
                name="userArea"
                value={userData.userArea}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.areaArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>시간</Form.Label>
            <Form.Control>
              <Form.Select
                style={{ size: 'large' }}
                onChange={onChangeAccountEvent}
                name="userTime"
                value={userData.userTime}
              >
                <option value="">---------------------------</option>
                {genOption(Arr.onOffArray)}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Label>직무</Form.Label>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestMain"
                  value={userData.userInterestMain}
                >
                  <option value="">---------------------------</option>
                  {genOption(Arr.mainArray)}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Form.Field>
              <Form.Control>
                <Form.Select
                  onChange={onChangeAccountEvent}
                  name="userInterestSub"
                  value={userData.userInterestSub}
                >
                  <option value="">---------------------------</option>
                  {userData.userInterestMain === '기획' && (
                    <>{genOption(Arr.planArray)}</>
                  )}
                  {userData.userInterestMain === '디자인' && (
                    <>{genOption(Arr.designArray)}</>
                  )}
                  {userData.userInterestMain === '프론트엔드개발' && (
                    <>{genOption(Arr.frontArray)}</>
                  )}
                  {userData.userInterestMain === '백엔드개발' && (
                    <>{genOption(Arr.backArray)}</>
                  )}
                  {userData.userInterestMain === '사업' && (
                    <>{genOption(Arr.coopArray)}</>
                  )}
                  {userData.userInterestMain === '기타' && (
                    <>{genOption(Arr.etcArray)}</>
                  )}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </div>
          <br />
          <br />
          <div>
            <Button
              style={{ fontWeight: 'bolder' }}
              className="button is-medium is-fullwidth"
              onClick={Click}
            >
              가입하기
            </Button>
          </div>
        </Box>
      </Desktop>
    </Container>
  );
};
