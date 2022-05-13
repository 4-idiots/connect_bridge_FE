/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'react-bulma-components';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { useAuth } from '../../../contexts/hooks/useAuth';
import { teamLike, teamLikeCheck } from '../../../services/mainService';

export const TeamCard = ({ item, cnt }) => {
  const navigate = useNavigate();
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.likeCount);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const checkLike = async () => {
    try {
      const result = await teamLikeCheck(item.myid);
      setUsLike(result.data);
    } catch (error) {
      setUsLike(false);
    }
  };

  const handleLike = async () => {
    if (usLike) {
      setDynLike(dynLike - 1);
    } else {
      setDynLike(dynLike + 1);
    }
    setUsLike(!usLike);
    try {
      const result = await teamLike(item.myid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLike();
  }, []);

  return (
    <div className="card">
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
        {cnt === 0 && (
          <img
            src="https://cdn.discordapp.com/attachments/885739536301318169/974292656656101436/dolphin.jpeg"
            className="card__image"
            alt=""
          />
        )}
        {cnt === 1 && (
          <img
            src="https://cdn.discordapp.com/attachments/885739536301318169/974292656920363048/hama.jpeg"
            className="card__image"
            alt=""
          />
        )}
        {cnt === 2 && (
          <img
            src="https://cdn.discordapp.com/attachments/885739536301318169/974292657151033375/lion.jpeg"
            className="card__image"
            alt=""
          />
        )}
        {cnt === 3 && (
          <img
            src="https://cdn.discordapp.com/attachments/885739536301318169/974292657406898206/monkey.jpeg"
            className="card__image"
            alt=""
          />
        )}
      </div>
      <div
        className="card__overlay"
        onClick={() => navigate(`/team/info/${item.myid}`)}
      >
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img className="card__thumb" src={item.userPicture} alt="" />
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
  cnt: PropTypes.number.isRequired,
};
