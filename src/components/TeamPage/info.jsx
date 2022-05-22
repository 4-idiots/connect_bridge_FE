import React, { useState, useEffect } from 'react';
import { Button } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { useAuth } from '../../contexts/hooks/useAuth';
import {
  getSomeTeamService,
  teamLikeService,
} from '../../services/teamService';

export const InfoForm = () => {
  const { teamID } = useParams();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [user, setUser] = useState(null);
  const [follow, setfollow] = useState(false);

  const likeClick = async () => {
    setfollow(!follow);
    try {
      await teamLikeService(teamID);
    } catch (error) {
      // pass
    }
  };

  const getAxios = async () => {
    try {
      const result = await getSomeTeamService(teamID);
      setUser(result.data);
      setfollow(result.data.follow);
    } catch (error) {
      // pass
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  if (user) {
    return (
      <S.Main>
        <S.AllInfo>
          <S.Picture1>
            <S.Picture2>
              <S.Img>
                <img src={user.userPicture} alt="img" />
                <div
                  style={{ textAlign: 'center', fontSize: 36, fontWeight: 600 }}
                >
                  {user.userNickname}
                </div>
              </S.Img>
            </S.Picture2>
          </S.Picture1>
          <S.Mid>
            <S.Name>
              <S.Name1>
                {user.userNickname} &nbsp;&nbsp;
                {decodedToken ? (
                  <span>
                    <Button
                      onClick={likeClick}
                      color={follow ? 'danger' : 'black'}
                    >
                      🤍
                    </Button>
                  </span>
                ) : (
                  ''
                )}
              </S.Name1>
            </S.Name>
            <br />
            <br />
            <S.Width>
              <S.Width1>&nbsp;</S.Width1>
            </S.Width>
            <S.Info>
              <div>
                <S.Info1>
                  <S.Info2>
                    <span>
                      <strong>[ 내 정보 ]</strong>
                    </span>
                  </S.Info2>

                  <S.Info3>
                    <S.Info31>직 &nbsp;&nbsp;무</S.Info31>
                    <S.Info32>
                      {user.userInterestMain} &nbsp;&nbsp;/ &nbsp;&nbsp;
                      {user.userInterestSub}
                    </S.Info32>
                  </S.Info3>
                  <S.Info3>
                    <S.Info31>능 &nbsp;&nbsp;력</S.Info31>
                    <S.Info32>{user.userAbility}</S.Info32>
                  </S.Info3>
                  <S.Botinfo>
                    <S.Botinfo1>
                      <S.Botinfo11>사는 장소</S.Botinfo11>
                      <S.Botinfo12>{user.userArea}</S.Botinfo12>
                    </S.Botinfo1>
                    <S.Botinfo1>
                      <S.Botinfo11>가능 시간</S.Botinfo11>
                      <S.Botinfo12>{user.userTime}</S.Botinfo12>
                    </S.Botinfo1>
                    <S.Botinfo1>
                      <S.Botinfo11>온/오프라인</S.Botinfo11>
                      <S.Botinfo12>온라인만 가능</S.Botinfo12>
                    </S.Botinfo1>
                    <S.Botinfo1>
                      <S.Botinfo11>진행 현황</S.Botinfo11>
                      <S.Botinfo12>
                        프로젝트 0 &nbsp;&nbsp;/ &nbsp;&nbsp;스터디 0
                      </S.Botinfo12>
                    </S.Botinfo1>
                  </S.Botinfo>
                  <S.Text1>
                    <S.Text2>자기 소개</S.Text2>
                    <S.Text3>{user.userIntroduce}</S.Text3>
                  </S.Text1>
                </S.Info1>
              </div>
            </S.Info>
            <br />
            <S.Portfolio>
              <S.Portfolio1>
                <S.Portfolio11>포트폴리오</S.Portfolio11>
              </S.Portfolio1>
              <div>
                <S.Portfolio21>
                  <S.Portfolio211>
                    <S.Portfoliohttp href={user.userPortfolio} target="_blank">
                      {user.userPortfolio}
                    </S.Portfoliohttp>
                  </S.Portfolio211>
                </S.Portfolio21>
              </div>
            </S.Portfolio>
            <br />
            <br />
            <br />
            <br />
          </S.Mid>
        </S.AllInfo>
      </S.Main>
    );
  }
  return null;
};
