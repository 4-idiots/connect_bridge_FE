import React, { useState } from 'react';
import { Button, Card, Media, Heading, Image } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TeamCardForm = ({
  id,
  userNickname,
  userAbility,
  userInterest,
  userLike,
  onActClick,
  userPicture,
}) => {
  return (
    <div
      style={{
        marginRight: '30px',
        marginLeft: '16px',
        display: 'inline-block',
      }}
    >
      <Card
        style={{
          marginTop: '30px',
          marginRight: '30px',
          width: '260px',
          border: '2px solid #e7e7e7',
          padding: '14px ',
        }}
      >
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4}>{userNickname}</Heading>
              <br />
              <Heading subtitle size={6}>
                능력: {userAbility}
              </Heading>
              <Heading subtitle size={6}>
                흥미: {userInterest}
              </Heading>

              <Image
                renderAs={Link}
                to={`/team/info/${id}`}
                size={25}
                alt="64x64"
                src="http://bulma.io/images/placeholders/64x64.png"
              />
              <br />
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </div>
  );
};

TeamCardForm.propTypes = {
  id: PropTypes.number,
  userNickname: PropTypes.string,
  userAbility: PropTypes.string,
  userInterest: PropTypes.string,
  userPicture: PropTypes.string,
  userLike: PropTypes.number,
  onActClick: PropTypes.func,
};

TeamCardForm.defaultProps = {
  id: 0,
  userNickname: 'Title',
  userAbility: 'Ability',
  userInterest: 'Interest',
  userLike: 0,
  onActClick: () => {
    console.log('hh');
  },
  userPicture: 'Picture',
};
