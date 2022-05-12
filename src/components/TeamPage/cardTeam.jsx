import React, { useState } from 'react';
import { Button, Card, Media, Heading, Image } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TeamCardForm = ({
  myid,
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
          width: '200px',
          height: '350px',
          border: '2px solid #e7e7e7',
          padding: '14px ',
        }}
      >
        <Card.Content>
          <Media>
            <Media.Item>
              <div style={{ marginRight: '30px' }}>
                <Image
                  renderAs={Link}
                  to={`/team/info/${myid}`}
                  size="4by4"
                  alt="64x64"
                  src="http://bulma.io/images/placeholders/64x64.png"
                />

                <div size={5}>{userNickname}</div>
              </div>

              <br />
              <Heading subtitle size={6}>
                능력: {userAbility}
              </Heading>
              <Heading subtitle size={6}>
                흥미: {userInterest}
              </Heading>

              <br />
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </div>
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
