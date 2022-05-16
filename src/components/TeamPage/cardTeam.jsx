import React, { useState } from 'react';
import { Button, Card, Media, Heading, Image } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TeamCardForm = ({
  myid,
  userNickname,
  userAbility,
  userInterest,
  userLike,
  onActClick,
  userPicture,
}) => {
  /* <div
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
  </div>; */

  return (
    <People11>
      <People11122>
        <img to={`/team/info/${myid}`} src={userPicture} alt="img" />
      </People11122>
      <People111>
        <People1111> {userNickname} </People1111>
        <People1112>🤍:5</People1112>
      </People111>
      <People112>분야: {userInterest}</People112>
      <People112>능력: {userAbility}</People112>
    </People11>
  );
};

TeamCardForm.propTypes = {
  myid: PropTypes.number,
  userNickname: PropTypes.string,
  userAbility: PropTypes.string,
  userInterest: PropTypes.string,
  userPicture: PropTypes.string,
  userLike: PropTypes.number,
  onActClick: PropTypes.func,
};

TeamCardForm.defaultProps = {
  myid: 0,
  userNickname: 'Title',
  userAbility: 'Ability',
  userInterest: 'Interest',
  userLike: 0,
  onActClick: () => {
    console.log('hh');
  },
  userPicture: 'Picture',
};

const People11 = styled.li`
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  padding: 15px 20px 15px 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 0.2s;
  list-style: none;
`;

const People111 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;
const People11122 = styled.div`
  height: 100%;
`;
const People1111 = styled.div`
  margin-top: 15px;
  margin-bottom: 13px;
  margin-left: 7px;
  font-size: 22px;
  font-weight: bold;
`;
const People1112 = styled.div`
  margin-top: 22px;
  margin-bottom: 13px;
  margin-left: 7px;

  font-size: 0.9em;
`;
const People112 = styled.div`
  font-family: Noto Sans KR, Lato, sans-serif;
  margin-left: 17px;
`;
/* background-color: #f5f5f5; */
