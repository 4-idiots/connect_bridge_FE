/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Image, Content, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { studyLikeService } from '../../../services/studyService';
import { useAuth } from '../../../contexts/hooks/useAuth';
import * as S from './style';

export const DetailRightCard = ({ item, studyID }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(item.studySub);
  const [day, setDay] = useState({});
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const onLikeClick = async () => {
    try {
      await studyLikeService(studyID);
      setLike(!like);
    } catch (error) {
      // pass
    }
  };

  const getDate = () => {
    const start = new Date(item.studyStart);
    const sYear = start.getFullYear();
    const sMonth = `0${start.getMonth() + 1}`.slice(-2);
    const sDay = `0${start.getDate()}`.slice(-2);
    const startString = `${sYear}.${sMonth}.${sDay}`;

    const end = new Date(item.studyEnd);
    const eYear = end.getFullYear();
    const eMonth = `0${end.getMonth() + 1}`.slice(-2);
    const eDay = `0${end.getDate()}`.slice(-2);
    const endString = `${eYear}.${eMonth}.${eDay}`;

    const btMs = end.getTime() - start.getTime();
    const btDay = btMs / (1000 * 60 * 60 * 24);

    setDay({ startDate: startString, endDate: endString, btDay });
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <S.PageRight>
      <S.RightInfo
        onClick={() => navigate(`/team/info/${item.leaderInfo.leaderID}`)}
      >
        <S.RightPBig>리더 정보</S.RightPBig>
        <Media>
          <Media.Item align="left">
            <Image src={item.leaderInfo.leaderImg} size={64} />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <p>
                <strong>{item.leaderInfo.leaderName}</strong>
                <br />
                {item.leaderInfo.introduce}
                <br />
                <small
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon>
                    <i className="fas fa-eye" />
                  </Icon>
                  <span style={{ display: 'block', marginRight: 20 }}>
                    {item.studyView}
                  </span>
                  <Icon>
                    <i className="fas fa-heart" />
                  </Icon>
                  <span>{item.studyLike}</span>
                </small>
              </p>
            </Content>
          </Media.Item>
        </Media>
      </S.RightInfo>

      <S.RightMid>
        <S.RightPBig>스터디 기간</S.RightPBig>
        <S.RightPSmall>
          {day.startDate} ~ {day.endDate} ({day.btDay} 일)
        </S.RightPSmall>
      </S.RightMid>

      <S.RightMid>
        <S.RightPBig>스터디 분야</S.RightPBig>
        <S.RightPSmall>{item.studyField}</S.RightPSmall>
      </S.RightMid>
      {decodedToken ? (
        <>
          {like ? (
            <S.RightFollow>
              <S.RightPBig>스터디 구독 취소</S.RightPBig>
              <Button.Group align="center">
                <Button
                  className="is-light"
                  color="danger"
                  onClick={onLikeClick}
                  size="medium"
                  style={{ width: '100%' }}
                >
                  구독 취소
                </Button>
              </Button.Group>
            </S.RightFollow>
          ) : (
            <S.RightFollow>
              <S.RightPBig>스터디 구독하기</S.RightPBig>
              <Button.Group align="center">
                <Button
                  className="is-light"
                  color="danger"
                  onClick={onLikeClick}
                  size="medium"
                  style={{ width: '100%' }}
                >
                  구독 쾅!
                </Button>
              </Button.Group>
            </S.RightFollow>
          )}
        </>
      ) : (
        ''
      )}
    </S.PageRight>
  );
};

DetailRightCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  studyID: PropTypes.number.isRequired,
};
