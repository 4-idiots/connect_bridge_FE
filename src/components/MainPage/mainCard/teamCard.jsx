/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './teamStyle.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const TeamCard = ({ item, cnt }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/team/info/${item.myID}`)}>
      {cnt === 0 && (
        <img
          src="https://i.pinimg.com/564x/88/97/ec/8897ecb27b4dbd570100c9244fa11af0.jpg"
          className="card__image"
          alt=""
        />
      )}
      {cnt === 1 && (
        <img
          src="https://i.pinimg.com/564x/8d/30/eb/8d30eb3c01d82b03ec50724bc5b70737.jpg"
          className="card__image"
          alt=""
        />
      )}
      {cnt === 2 && (
        <img
          src="https://i.pinimg.com/564x/8c/a0/b8/8ca0b805e73aacb38bd07caa6d0f1ee2.jpg"
          className="card__image"
          alt=""
        />
      )}
      {cnt === 3 && (
        <img
          src="https://i.pinimg.com/564x/5a/0c/fb/5a0cfb1e3bdf49e6c3cd225ef3c87a06.jpg"
          className="card__image"
          alt=""
        />
      )}
      <div className="card__overlay">
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
