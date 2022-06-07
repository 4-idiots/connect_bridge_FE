/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const MemberCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/team/info/${item.memberID}`)}
      style={{ width: '300px', height: '360px' }}
    >
      <img src={item.memberImg} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{item.memberName}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ marginBottom: 4 }} className="card__status">
                분야: {item.memberInterestSub}
              </span>
              <span className="card__status">능력: {item.memberAbility}</span>
            </div>
          </div>
        </div>
        <p className="card__description">{item.Introduce}</p>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
