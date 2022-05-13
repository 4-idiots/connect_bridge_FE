/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import * as Send from '../../../services/projectService';
import { getKrField } from './getKrField';

export const ApplyCard = ({ item, projectID, cnt }) => {
  const navigate = useNavigate();
  const [field, setField] = useState('');
  const onYes = async () => {
    try {
      const result = await Send.projectYesService(projectID, item.submitID);
      alert('승인 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onNo = async () => {
    try {
      const result = await Send.projectNoService(projectID, item.submitID);
      alert('거절 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setField(getKrField(item.field));
  }, []);

  return (
    <div className="card">
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
        onClick={() => navigate(`/team/info/${item.userID}`)}
      >
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img className="card__thumb" src={item.img} alt="" />
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
  cnt: PropTypes.number.isRequired,
};
