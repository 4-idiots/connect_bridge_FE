import React, { useState, useEffect } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { RecruitModal } from './recruitModal';
import * as Send from '../../../services/projectService';
import { calcMem } from './calcMember';
import { useAuth } from '../../../contexts/hooks/useAuth';
import * as LK from '../../../RefactorFunc/likeFunc';

export const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [isHover, setIsHover] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.projectLike);

  const handleLike = async () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(Send.projectLikeService, item.projectID);
  };

  useEffect(() => {
    LK.checkLike(item.projectID, setUsLike, Send.projectLikeCheck);
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
      <S.ResNormal onClick={() => navigate(`/project/${item.projectID}`)}>
        <S.ResImg
          style={{ width: '360px', height: '360px' }}
          src={item.projectImg}
        />
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
      <Card.Content
        style={{ width: '300px', height: '400px' }}
        onClick={() => navigate(`/project/${item.projectID}`)}
      >
        <Media style={{ marginBottom: 0 }}>
          <Media.Item>
            <Heading subtitle size={7}>
              {item.projectField}
            </Heading>
            <Heading size={6}>{item.projectName}</Heading>
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
              <div>{dynLike}</div>
            </S.ResIconBox>
            <S.ResIconBox mar="10px">
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <div>{item.projectView}</div>
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
            <S.ResSpan>{calcMem(item)}</S.ResSpan>
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

ProjectCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
