/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import { InfoForm } from '../TeamPage/info';

export const SignupForm = () => {
  const [data, setdata] = useState([]);
  const [userPhone, setuserPhone] = useState('');
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userREPW, setuserREPW] = useState('');
  const [userNickname, setuserNickname] = useState('');
  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userIntroduce, setuserIntroduce] = useState('');
  const [userGender, setuserGender] = useState(false);
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterest, setuserInterest] = useState('');
  const [sameID, setsameID] = useState(false);
  const [sameNickname, setsameNickname] = useState(false);
  const [sameEmail, setsameEmail] = useState(false);
  const [userBirthdayY, setuserBirthdayY] = useState('');
  const [userBirthdayM, setuserBirthdayM] = useState('');
  const [userBirthdayD, setuserBirthdayD] = useState('');
  const [code, setcode] = useState('');
  const [codeon, setcodeon] = useState(false);

  const userData = () => {
    return axios.get('https://4idiot.ddns.net:8080/users').then(response => {
      console.log(response);
      setdata(response.data);
    });
  };

  useEffect(() => {
    userData();
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

  const userREPWdata = e => {
    setuserREPW(e.target.value);
  };

  const userNicknamedata = e => {
    setuserNickname(e.target.value);
  };

  const userNamedata = e => {
    setuserName(e.target.value);
  };
  const userBirthdayYdata = e => {
    setuserBirthdayY(e.target.value);
  };
  const userBirthdayMdata = e => {
    setuserBirthdayM(e.target.value);
  };
  const userBirthdayDdata = e => {
    setuserBirthdayD(e.target.value);
  };

  const userEmaildata = e => {
    setuserEmail(e.target.value);
  };

  const userIntroducedata = e => {
    setuserIntroduce(e.target.value);
  };

  const userGenderdataM = () => {
    setuserGender(current => current);
  };

  const userGenderdataW = () => {
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
  const codedata = e => {
    setcode(e.target.value);
  };

  const sameIDButton = e => {
    e.preventDefault();

    axios
      .get(`https://4idiot.ddns.net:8080/users/check/userID?userID=${userID}`)
      .then(response => {
        console.log(response);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요');

          setsameID(false);
        } else {
          alert('중복이 아닙니다.');
          setsameID(true);
        }
      });
  };

  const sameNicknameButton = e => {
    e.preventDefault();

    axios
      .get(
        `https://4idiot.ddns.net:8080/users/check/userNickname?userNickname=${userNickname}`,
      )
      .then(response => {
        console.log(response);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요');

          setsameNickname(false);
        } else {
          alert('중복이 아닙니다.');
          setsameNickname(true);
        }
      });
  };

  const sameEmailButton = e => {
    e.preventDefault();

    axios
      .get(
        `https://4idiot.ddns.net:8080/users/check/userEmail?userEmail=${userEmail}`,
      )
      .then(response => {
        console.log(response);
        console.log(response.data.value);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요.');

          setsameEmail(false);
        } else {
          alert('중복이 아닙니다.');
          setsameEmail(true);
        }
      });
  };

  /* const EmailcheckButton = e => {
    e.preventDefault();

    axios
      .get(
        `http://4idiot.ddns.net:8080/users/check/userEmail?userEmail=${userEmail}`,
      )
      .then(response => {
        console.log(response);
        if (response.data.value === true) {
          alert('중복입니다. 다시 입력해주세요.');

          setsameEmail(false);
        } else {
          Prompt((message = '페이지를 떠나시겠습니까?'));
          setsameEmail(true);
        }
      });
  }; */

  /*   this.input(
    axios
      .post('http://4idiot.ddns.net:8080/verifyCode', {
        result,
      })
      .then(response => {
        
      }),
    // eslint-disable-next-line no-unused-vars
  ).innerText = greeting;
})
.catch(response => {
  alert('안됨.');
});
} else {
alert('다시 확인해주세요');
}
 */

  const EmailOnClick = e => {
    e.preventDefault();
    if (sameEmail === true) {
      // eslint-disable-next-line prefer-const
      axios
        .post('https://4idiot.ddns.net:8080/users/check/Email', {
          userEmail,
        })
        .then(response => {
          console.log(data);
          alert('이메일 인증칸에 6글자를 입력해주세요');
          // eslint-disable-next-line react/no-this-in-sfc

          // eslint-disable-next-line no-unused-vars
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          alert('이메일 중복 체크를 해주세요.');
        });
    } else alert('이메일 중복 체크를 해주세요');
  };

  const EmailCode = e => {
    e.preventDefault();
    console.log(data);
    console.log(code);
    axios
      .post('https://4idiot.ddns.net:8080/verifycode', {
        code,
        userEmail,
      })
      .then(response => {
        console.log(response);
        console.log(response.data.message);
        console.log(code);
      });
    if (data === 'ok' && codeon === false) {
      alert('인증완료');
      setcodeon(true);
    } else alert('다시 확인해 주세요.');
    setcodeon(false);
  };
  const Click = e => {
    e.preventDefault();

    if (
      userName &&
      userIntroduce &&
      userAbility &&
      userArea &&
      userTime &&
      userInterest &&
      userBirthdayY &&
      userBirthdayM &&
      userBirthdayD &&
      userREPW === userPW &&
      validator.isMobilePhone(userPhone, ['ko-KR']) === true &&
      validator.isLength(userID, { min: 5, max: 20 }) === true &&
      validator.isLength(userPW, { min: 8, max: 20 }) === true &&
      validator.isEmail(userEmail) === true &&
      sameID === true &&
      sameNickname === true &&
      sameEmail === true
    ) {
      axios
        .post('https://4idiot.ddns.net:8080/users/register', {
          userPhone,
          userID,
          userPW,
          userNickname,
          userName,
          userEmail,
          userIntroduce,
          userGender,
          userAbility,
          userArea,
          userTime,
          userInterest,
          userBirthdayY,
          userBirthdayM,
          userBirthdayD,
        })

        .then(response => {
          console.log(response.data.message);
          console.log(data);
          userData();
          alert('회원가입이 완료하였습니다.');
          window.location = '/login';
        })
        .catch(response => {
          alert('입력값을 다시 확인해주세요.');
        });
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>회원가입</Heading>

      <Box style={{ margin: 100, Box: 'center' }}>
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
          {validator.isMobilePhone(userPhone, ['ko-KR']) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
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
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              5~20자로 사용하세요
            </Form.Label>
          )}
          <Button size="small" color="danger" onClick={sameIDButton}>
            중복확인
          </Button>
        </Form.Field>
        <br />
        <Form.Field>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control>
            <Form.Input
              type="password"
              placeholder="비밀번호"
              onChange={userPWdata}
              value={userPW}
            />
          </Form.Control>
          {validator.isLength(userPW, { min: 8, max: 20 }) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              8~20자로 사용하세요
            </Form.Label>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Label>비밀번호 재확인</Form.Label>
          <Form.Control>
            <Form.Input
              type="password"
              placeholder="비밀번호 재확인"
              onChange={userREPWdata}
              value={userREPW}
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
          <Button
            mt="1"
            size="small"
            color="danger"
            onClick={sameNicknameButton}
          >
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
              onChange={userIntroducedata}
              value={userIntroduce}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              placeholder="이메일"
              onChange={userEmaildata}
              value={userEmail}
            />
          </Form.Control>

          {validator.isEmail(userEmail) ? (
            <Form.Label style={{ color: 'green' }} size="small">
              O
            </Form.Label>
          ) : (
            <Form.Label style={{ color: '#ff6347' }} size="small">
              이메일 형식이 아닙니다!
            </Form.Label>
          )}
          <Button size="small" color="danger" onClick={sameEmailButton}>
            중복확인
          </Button>
          <Button size="small" color="danger" onClick={EmailOnClick}>
            이메일 인증
          </Button>
          <Form.Control>
            <Form.Input
              type="emailcode"
              placeholder="이메일코드"
              onChange={codedata}
              value={code}
            />
          </Form.Control>
          <Button size="small" color="danger" onClick={EmailCode}>
            확인
          </Button>

          <div id="result" />
        </Form.Field>
        <br />
        <Form.Field>
          <Form.Label>생년월일</Form.Label>
          <Form.Control>
            <Form.Select
              className="is-rounded"
              onChange={userBirthdayYdata}
              value={userBirthdayY}
              size="small"
            >
              <option value="">-------</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
            </Form.Select>
            년도
            <Form.Select
              className="is-rounded"
              onChange={userBirthdayMdata}
              value={userBirthdayM}
              size="small"
            >
              <option value="">-------</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>
            월
            <Form.Select
              className="is-rounded"
              onChange={userBirthdayDdata}
              value={userBirthdayD}
              size="small"
            >
              <option value="">-------</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Form.Select>
            일
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>성별</Form.Label>
          <Form.Control>
            <Form.Radio
              type="radio"
              name="Gender"
              onChange={userGenderdataM}
              value={userGender}
            >
              남
            </Form.Radio>
            <br />
            <Form.Radio
              type="radio"
              name="Gender"
              onChange={userGenderdataW}
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
