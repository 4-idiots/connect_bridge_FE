import React, { useState, useEffect } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { RecruitModal } from './recruitModal';
import * as Send from '../../../services/projectService';
import { useAuth } from '../../../contexts/hooks/useAuth';

export const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [isHover, setIsHover] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
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
      const result = await Send.projectLikeService(item.projectID);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
          : {
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        onClick={() => navigate(`/project/${item.projectID}`)}
        className="imgclick"
        role="presentation"
      >
        <img
          src={item.projectImg}
          style={{
            width: '100%',
            height: '160px',
            borderRadius: '5%',
            objectFit: 'cover',
          }}
          alt="img"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 5,
          left: 10,
          backgroundColor: 'black',
          color: 'white',
          padding: 5,
          fontWeight: 'bold',
        }}
      >
        사이드프로젝트
      </div>
      <S.CustomDiv
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
      </S.CustomDiv>
      <Card.Content onClick={() => navigate(`/project/${item.projectID}`)}>
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <div>{dynLike}</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <div>{item.projectView}</div>
            </div>
          </Content>
        </Media>
        <S.mainRecruitWrap
          onMouseEnter={() => {
            setOnRecruit(true);
          }}
          onMouseLeave={() => {
            setOnRecruit(false);
          }}
        >
          <S.mainRecruitBox>
            모집현황
            <Icon>
              <i className="fas fa-arrow-up" />
            </Icon>
          </S.mainRecruitBox>
          {onRecruit ? <RecruitModal item={item} /> : ''}
        </S.mainRecruitWrap>
      </Card.Content>
    </Card>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
