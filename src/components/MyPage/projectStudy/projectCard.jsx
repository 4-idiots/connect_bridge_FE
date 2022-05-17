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
    <B.Card
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
      </S.CustomDiv>
      <B.Card.Content>
        <B.Media
          style={{ marginBottom: 0 }}
          onClick={() => navigate(`/project/${item.projectID}`)}
        >
          <B.Media.Item>
            <B.Heading subtitle size={7}>
              {item.projectField}
            </B.Heading>
            <B.Heading size={6}>{item.projectName}</B.Heading>
          </B.Media.Item>
        </B.Media>
        <B.Media
          style={{ marginBottom: '0.8rem' }}
          onClick={() => navigate(`/project/${item.projectID}`)}
        >
          <B.Content
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <B.Icon>
                <i className="fas fa-heart" />
              </B.Icon>
              <div>{dynLike}</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <B.Icon>
                <i className="fas fa-eye" />
              </B.Icon>
              <div>{item.projectView}</div>
            </div>
          </B.Content>
        </B.Media>
        <S.mainRecruitWrap>
          {recu ? (
            <B.Button color="danger" onClick={() => rejectService()}>
              취소 하기
            </B.Button>
          ) : (
            ''
          )}
        </S.mainRecruitWrap>
      </B.Card.Content>
    </B.Card>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  recu: PropTypes.bool.isRequired,
};
