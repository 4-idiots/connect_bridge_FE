/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import * as Send from '../../../services/studyService';

export const ApplyMemCard = ({ item, studyID }) => {
  const navigate = useNavigate();

  const onNo = async () => {
    try {
      await Send.studyOutService(studyID, item.memberID);
      alert('거절 되었습니다.');
      window.location.replace(`/study/${studyID}`);
    } catch (error) {
      // pass
    }
  };

  return (
    <div className="cards" style={{ width: '300px', height: '360px' }}>
      <div style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}>
        <B.Button onClick={onNo} color="danger">
          방출하기
        </B.Button>
      </div>
      <div onClick={() => navigate(`/team/info/${item.memberID}`)}>
        <img src={item.memberImg} className="card__image" alt="" />
      </div>
      <div
        className="card__overlay"
        onClick={() => navigate(`/team/info/${item.memberID}`)}
      >
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img className="card__thumb" src={item.memberImg} alt="" />
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
        <p className="card__description">{item.memberIntroduce}</p>
      </div>
    </div>
  );
};

ApplyMemCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  studyID: PropTypes.string.isRequired,
};
