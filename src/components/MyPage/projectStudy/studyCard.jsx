/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import * as Send from '../../../services/studyService';
import { useAuth } from '../../../contexts/hooks/useAuth';
import * as LK from '../../../RefactorFunc/likeFunc';

export const StudyCard = ({ item, recu }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [isHover, setIsHover] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.studyLike);

  const rejectService = async () => {
    try {
      await Send.studyNoService(item.studyID, item.submitID);
      alert('취소 되었습니다.');
    } catch (error) {
      // pass
    }
  };

  const handleLike = async () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(Send.studyLikeService, item.studyID);
  };

  useEffect(() => {
    LK.checkLike(item.studyID, setUsLike, Send.studyLikeCheck);
  }, []);

  return (
    <S.ResCard
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
            }
          : {}
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <S.ResNormal onClick={() => navigate(`/study/${item.studyID}`)}>
        <S.ResImg src={item.studyImg} />
      </S.ResNormal>
      <S.ResType>스터디/네트워킹</S.ResType>
      <S.ResIcon
        onClick={handleLike}
        onMouseEnter={() => {
          setOnHeart(true);
        }}
        onMouseLeave={() => {
          setOnHeart(false);
        }}
      >
        {decodedToken ? (
          <div>
            {usLike ? (
              <B.Icon>
                <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'} />
              </B.Icon>
            ) : (
              <B.Icon>
                <Heart
                  fill={onHeart ? 'rgb(211,211,211)' : 'rgb(128,128,128)'}
                />
              </B.Icon>
            )}
          </div>
        ) : (
          ''
        )}
      </S.ResIcon>
      <B.Card.Content>
        <B.Media
          style={{ marginBottom: 0 }}
          onClick={() => navigate(`/study/${item.studyID}`)}
        >
          <B.Media.Item>
            <B.Heading subtitle size={7}>
              {item.studyField}
            </B.Heading>
            <B.Heading size={6}>{item.studyName}</B.Heading>
          </B.Media.Item>
        </B.Media>
        <B.Media
          style={{ marginBottom: '0.8rem' }}
          onClick={() => navigate(`/study/${item.studyID}`)}
        >
          <B.Content
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <S.ResIconBox>
              <B.Icon>
                <i className="fas fa-heart" />
              </B.Icon>
              <S.ResNormal>{dynLike}</S.ResNormal>
            </S.ResIconBox>
            <S.ResIconBox mar="10px">
              <B.Icon>
                <i className="fas fa-eye" />
              </B.Icon>
              <S.ResNormal>{item.studyView}</S.ResNormal>
            </S.ResIconBox>
          </B.Content>
        </B.Media>
        <S.ResRecruitWrap>
          <S.ResRecruitBox>
            {decodedToken && decodedToken.id !== item.userID ? (
              <>
                {recu ? (
                  <B.Button color="danger" onClick={() => rejectService()}>
                    취소 하기
                  </B.Button>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
          </S.ResRecruitBox>
        </S.ResRecruitWrap>
      </B.Card.Content>
    </S.ResCard>
  );
};

StudyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  recu: PropTypes.bool.isRequired,
};
