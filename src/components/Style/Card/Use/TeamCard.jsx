/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'react-bulma-components';
import { ReactComponent as Heart } from '../../../../assets/svg/heart.svg';
import { useAuth } from '../../../../contexts/hooks/useAuth';
import { teamLike, teamLikeCheck } from '../../../../services/mainService';
import * as LK from '../../../../RefactorFunc/likeFunc';

export const TeamCard = ({ item }) => {
  const navigate = useNavigate();
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.likeCount);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const handleLike = () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(teamLike, item.myid);
  };

  useEffect(() => {
    console.log(item);
    LK.checkLike(item.myid, setUsLike, teamLikeCheck);
  }, []);

  return (
    <div className="cards" style={{ width: '300px', height: '360px' }}>
      <div style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}>
        {decodedToken ? (
          <div
            onClick={handleLike}
            onMouseEnter={() => {
              setOnHeart(true);
            }}
            onMouseLeave={() => {
              setOnHeart(false);
            }}
          >
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
      </div>
      <div onClick={() => navigate(`/team/info/${item.myid}`)}>
        <img src={item.userPicture} className="card__image" alt="" />
      </div>
      <div
        className="card__overlay"
        onClick={() => navigate(`/team/info/${item.myid}`)}
      >
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{item.userNickname}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ marginBottom: 4 }} className="card__status">
                분야: {item.userInterestSub}
              </span>
              <span className="card__status">능력: {item.userAbility}</span>
            </div>
          </div>
        </div>
        <p className="card__description">{item.userIntroduce}</p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
