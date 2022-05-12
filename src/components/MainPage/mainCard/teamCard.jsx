/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const TeamCard = ({ item, cnt }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/team/info/${item.myID}`)}>
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
