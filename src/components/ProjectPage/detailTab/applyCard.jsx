/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import * as Send from '../../../services/projectService';
import { getKrField } from './getKrField';

export const ApplyCard = ({ item, projectID }) => {
  const navigate = useNavigate();
  const [field, setField] = useState('');
  const onYes = async () => {
    try {
      await Send.projectYesService(projectID, item.submitID);
      alert('승인 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      // pass
    }
  };

  const onNo = async () => {
    try {
      await Send.projectNoService(projectID, item.submitID);
      alert('거절 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      // pass
    }
  };

  useEffect(() => {
    setField(getKrField(item.field));
  }, []);

  return (
    <div className="cards" style={{ width: '300px', height: '360px' }}>
      <div style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}>
        <B.Button.Group>
          <B.Button onClick={onYes} color="success">
            승인
          </B.Button>
          <B.Button onClick={onNo} color="danger">
            거절
          </B.Button>
        </B.Button.Group>
      </div>
      <div onClick={() => navigate(`/team/info/${item.userID}`)}>
        <img src={item.img} className="card__image" alt="" />
      </div>
      <div
        className="card__overlay"
        onClick={() => navigate(`/team/info/${item.userID}`)}
      >
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{item.nickname}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ marginBottom: 4 }} className="card__status">
                지원 분야: {field}
              </span>
            </div>
          </div>
        </div>
        <p className="card__description">{item.introduce}</p>
      </div>
    </div>
  );
};

ApplyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  projectID: PropTypes.string.isRequired,
};
