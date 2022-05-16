/* eslint-disable no-nested-ternary */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Image,
  Content,
} from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import customAxios from '../../services/customAxios';

export const InfoForm = () => {
  const [users, setusers] = useState([]);
  const [myid, setmyid] = useState();
  const [userNickname, setuserNickname] = useState('');
  const [userName, setuserName] = useState('');
  const [userAbility, setuserAbility] = useState('');
  const [userArea, setuserArea] = useState('');
  const [userTime, setuserTime] = useState('');
  const [userInterestMain, setuserInterestMain] = useState('');
  const [userInterestSub, setuserInterestSub] = useState('');
  const [userIntroduce, setuserIntroduce] = useState('');
  const { teamID } = useParams();
  const [off, setoff] = useState(0);
  const [like, setlike] = useState(0);
  const [follow, setfollow] = useState(0);
  const [color, setColor] = useState('');
  const [userPicture, setuserPicture] = useState('');
  const [userPortfolio, setuserPortfolio] = useState('');

  const userData = () => {
    customAxios.get(`/api/team/info/${teamID}`).then(response => {
      console.log(response);
      setusers(response.data);
      setmyid(response.data.myid);
      setuserNickname(response.data.userNickname);
      setuserName(response.data.userName);
      setuserAbility(response.data.userAbility);
      setuserArea(response.data.userArea);
      setuserTime(response.data.userTime);
      setuserInterestMain(response.data.userInterestMain);
      setuserInterestSub(response.data.userInterestSub);
      setuserIntroduce(response.data.userIntroduce);
      setfollow(response.data.follow);
      setColor(response.data.color);
      setuserPortfolio(response.data.userPortfolio);
      setuserPicture(response.data.userPicture);
    });
  };

  const followdata = () => {
    setfollow(current => !current);
  };

  const likeClick = () => {
    if (follow === 1) {
      customAxios.get(`/api/follow?toUserId=${teamID}`).then(response => {
        console.log(teamID);
        console.log(response.data.follow);
      });
      // eslint-disable-next-line no-unused-expressions
      color === 'black' ? setColor('danger') : setColor('black');
      // eslint-disable-next-line no-unused-expressions
    } else if (follow === 2)
      customAxios.get(`/api/follow?toUserId=${teamID}`).then(response => {
        console.log(teamID);
        console.log(response.data.follow);
      });
    // eslint-disable-next-line no-unused-expressions
    color === 'danger' ? setColor('black') : setColor('danger');
  };

  const likeunClick = () => {
    // eslint-disable-next-line no-unused-expressions
    color === 'danger' ? setColor('black') : setColor('danger');
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <Main>
      <AllInfo>
        <Picture1>
          <Picture2>
            <Img>
              <img src={userPicture} alt="img" />
              <div
                style={{ textAlign: 'center', fontSize: 36, fontWeight: 600 }}
              >
                {userNickname}
              </div>
            </Img>
          </Picture2>
        </Picture1>
        <Mid>
          <Name>
            <Name1>
              {userNickname} &nbsp;&nbsp;
              <span>
                {follow === 1 ? (
                  <Button
                    onClick={likeClick}
                    onChange={followdata}
                    color={color}
                  >
                    <h1>🤍</h1>
                  </Button>
                ) : follow === 2 ? (
                  <Button
                    onClick={likeClick}
                    onChange={followdata}
                    color={color}
                  >
                    <h1>🤍</h1>
                  </Button>
                ) : (
                  <> </>
                )}
              </span>
            </Name1>
          </Name>
          <br />
          <br />
          <Width>
            <Width1>&nbsp;</Width1>
          </Width>
          <Info>
            <div>
              <Info1>
                <Info2>
                  <span>
                    <strong>[ 내 정보 ]</strong>
                  </span>
                </Info2>

                <Info3>
                  <Info31>직 &nbsp;&nbsp;무</Info31>
                  <Info32>
                    {userInterestMain} &nbsp;&nbsp;/ &nbsp;&nbsp;
                    {userInterestSub}
                  </Info32>
                </Info3>
                <Info3>
                  <Info31>능 &nbsp;&nbsp;력</Info31>
                  <Info32>{userAbility}</Info32>
                </Info3>
                <Info3>
                  <Info31>하나 &nbsp;&nbsp;더</Info31>
                  <Info32>
                    {userInterestMain} &nbsp;&nbsp;/ &nbsp;&nbsp;
                    {userInterestSub}
                  </Info32>
                </Info3>
                <Botinfo>
                  <Botinfo1>
                    <Botinfo11>사는 장소</Botinfo11>
                    <Botinfo12>{userArea}</Botinfo12>
                  </Botinfo1>
                  <Botinfo1>
                    <Botinfo11>가능 시간</Botinfo11>
                    <Botinfo12>{userTime}</Botinfo12>
                  </Botinfo1>
                  <Botinfo1>
                    <Botinfo11>온/오프라인</Botinfo11>
                    <Botinfo12>온라인만 가능</Botinfo12>
                  </Botinfo1>
                  <Botinfo1>
                    <Botinfo11>진행 현황</Botinfo11>
                    <Botinfo12>
                      프로젝트 0 &nbsp;&nbsp;/ &nbsp;&nbsp;스터디 0
                    </Botinfo12>
                  </Botinfo1>
                </Botinfo>
                <Text1>
                  <Text2>자기 소개</Text2>
                  <Text3>{userIntroduce}</Text3>
                </Text1>
              </Info1>
            </div>
          </Info>
          <br />
          <Portfolio>
            <Portfolio1>
              <Portfolio11>포트폴리오</Portfolio11>
            </Portfolio1>
            <div>
              <Portfolio21>
                <Portfolio211>
                  <Portfolio2111>
                    <Portfoliohttp href={userPortfolio} target="_blank">
                      {userPortfolio}
                    </Portfoliohttp>
                  </Portfolio2111>
                </Portfolio211>
              </Portfolio21>
            </div>
          </Portfolio>
          <br />
          <br />
          <br />
          <br />
        </Mid>
      </AllInfo>
    </Main>
  );
};

const Main = styled.section`
  width: 100%;
  margin-top: 100px;
  transition: all 0.2s;
  background-color: #fff;
  display: block;
  -webkit-text-size-adjust: none;
  font-family: Noto Sans KR, Lato, sans-serif;
  line-height: 1.5;
  color: #333;
  font-size: 16px;
`;

const AllInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s;
`;

const Picture1 = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background-color: #ddd;
  transition: all 0.2s;
  position: relative;
  margin: 0 auto 16px;
`;
const Picture2 = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background-color: #ddd;
  overflow: hidden;
  transition: all 0.2s;
  position: relative;
`;

const Img = styled.div`
  width: 130px;
  height: 130px;
  object-fit: cover;
`;
const Mid = styled.div`
  border-bottom: 1px solid #dcdce1;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: -28px;
  margin-left: auto;
`;
const Width = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;
const Width1 = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-bottom: 1.5px solid #ededed;
  width: 100%;
`;
const Name = styled.div`
  text-align: center;
`;

const Name1 = styled.p`
  font-size: 22px;
  color: #42495b;
  line-height: 1.6;
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  max-width: 1080px;
  margin: 0 auto 20px;
`;

const Info1 = styled.ul`
  font-size: 1rem;
  color: #424251;
  width: 100%;
  list-style: none;
`;
const Info2 = styled.li`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;
const Info3 = styled.li`
  margin-bottom: 24px;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;

const Info31 = styled.span`
  width: 75px;
  margin-right: 42px;
  display: inline-block;
  color: #424251;
`;
const Info32 = styled.span`
  color: #666;
`;

const Botinfo = styled.ul`
  box-sizing: border-box;
  background-color: #f6f6f9;
  padding: 20px 0 15px 36px;
  border-bottom: 0 solid #42495b;
  margin-top: 14px;
  margin-bottom: 27px;
`;

const Botinfo1 = styled.li`
  margin-bottom: 24px;
  font-size: 0.875rem;
  line-height: 0.875rem;
  list-style: none;
`;
const Botinfo11 = styled.span`
  width: 72px;
  margin-right: 48px;
  display: inline-flex;
  color: #424251;
`;

const Botinfo12 = styled.span`
  display: inline;
  color: #696980;
`;
const Text1 = styled.li`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 24px;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;
const Text2 = styled.span`
  width: 75px !important;
  margin-right: 50px;
  color: #424521;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;
const Text3 = styled.p`
  font-size: 14px;
  line-height: 1.36;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-bottom: 0;
  flex-direction: column;
  color: #696980;
`;

const Portfolio = styled.div`
  background-color: #fafafa;
  padding: 20px 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Portfolio1 = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

const Portfolio11 = styled.p`
  justify-content: left;
  color: #42495b;
  line-height: 1.6;
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
`;

const Portfolio21 = styled.ul`
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Portfolio211 = styled.li`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Portfolio2111 = styled.ul`
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 120px;
`;

const Portfoliohttp = styled.a`
  margin-bottom: 0 !important;
  font-size: 1.2rem;
  color: #8e8ea2;
  text-decoration: none;
  line-height: 1.6;
  display: block !important;
  width: 100%;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  cursor: pointer;
`;
