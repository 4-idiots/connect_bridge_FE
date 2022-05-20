import React, { useState, useEffect } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { RecruitModal } from './recruitModal';
import * as Send from '../../../services/studyService';
import { useAuth } from '../../../contexts/hooks/useAuth';

export const StudyCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [isHover, setIsHover] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.studyLike);

  const checkLike = async () => {
    try {
      const result = await Send.studyLikeCheck(item.studyID);
      setUsLike(result.data);
    } catch (error) {
      setUsLike(false);
    }
  };

  useEffect(() => {
    checkLike();
  }, []);

  const handleLike = async () => {
    if (usLike) {
      setDynLike(dynLike - 1);
    } else {
      setDynLike(dynLike + 1);
    }
    setUsLike(!usLike);
    try {
      await Send.studyLikeService(item.studyID);
    } catch (error) {
      // pass
    }
  };

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
              <Icon>
                <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'} />
              </Icon>
            ) : (
              <Icon>
                <Heart
                  fill={onHeart ? 'rgb(211,211,211)' : 'rgb(128,128,128)'}
                />
              </Icon>
            )}
          </div>
        ) : (
          ''
        )}
      </S.ResIcon>
      <Card.Content onClick={() => navigate(`/study/${item.studyID}`)}>
        <Media style={{ marginBottom: 0 }}>
          <Media.Item>
            <Heading subtitle size={7}>
              {item.studyField}
            </Heading>
            <Heading size={6}>{item.studyName}</Heading>
          </Media.Item>
        </Media>
        <Media style={{ marginBottom: '0.8rem' }}>
          <Content
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <S.ResIconBox>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <S.ResNormal>{dynLike}</S.ResNormal>
            </S.ResIconBox>
            <S.ResIconBox mar="10px">
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <S.ResNormal>{item.studyView}</S.ResNormal>
            </S.ResIconBox>
          </Content>
        </Media>
        <S.ResRecruitWrap
          onMouseEnter={() => {
            setOnRecruit(true);
          }}
          onMouseLeave={() => {
            setOnRecruit(false);
          }}
        >
          <S.ResRecruitBox>
            모집현황
            <S.ResSpan>
              {item.studyMemberNow}/{item.studyMember}
            </S.ResSpan>
            <Icon>
              <i className="fas fa-arrow-up" />
            </Icon>
          </S.ResRecruitBox>
          {onRecruit ? <RecruitModal item={item} /> : ''}
        </S.ResRecruitWrap>
      </Card.Content>
    </S.ResCard>
  );
};

StudyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
