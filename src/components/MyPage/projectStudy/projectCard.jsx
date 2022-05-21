import React, { useState, useEffect } from 'react';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import * as Send from '../../../services/projectService';
import { useAuth } from '../../../contexts/hooks/useAuth';

export const ProjectCard = ({ item, recu }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [isHover, setIsHover] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.projectLike);

  const checkLike = async () => {
    try {
      const result = await Send.projectLikeCheck(item.projectID);
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
      await Send.projectLikeService(item.projectID);
    } catch (error) {
      // pass
    }
  };

  const rejectService = async () => {
    try {
      await Send.projectNoService(item.submitID);
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
      <S.ResNormal onClick={() => navigate(`/project/${item.projectID}`)}>
        <S.ResImg src={item.projectImg} />
      </S.ResNormal>
      <S.ResType>사이드프로젝트</S.ResType>
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
      <B.Card.Content onClick={() => navigate(`/project/${item.projectID}`)}>
        <B.Media style={{ marginBottom: 0 }}>
          <B.Media.Item>
            <B.Heading subtitle size={7}>
              {item.projectField}
            </B.Heading>
            <B.Heading size={6}>{item.projectName}</B.Heading>
          </B.Media.Item>
        </B.Media>
        <B.Media style={{ marginBottom: '0.8rem' }}>
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
              <div>{dynLike}</div>
            </S.ResIconBox>
            <S.ResIconBox mar="10px">
              <B.Icon>
                <i className="fas fa-eye" />
              </B.Icon>
              <div>{item.projectView}</div>
            </S.ResIconBox>
          </B.Content>
        </B.Media>
        <S.ResRecruitWrap>
          <S.ResRecruitBox>
            {recu ? (
              <B.Button color="danger" onClick={() => rejectService()}>
                취소 하기
              </B.Button>
            ) : (
              ''
            )}
          </S.ResRecruitBox>
        </S.ResRecruitWrap>
      </B.Card.Content>
    </S.ResCard>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  recu: PropTypes.bool.isRequired,
};
