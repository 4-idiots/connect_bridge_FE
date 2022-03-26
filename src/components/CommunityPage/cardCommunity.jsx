import React, { useState } from 'react';
import { Button, Card, Media, Heading, Image } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CommunityCardForm = ({
  postID,
  title,
  userNickname,
  viewCount,
  likeCount,
  commentCount,
  onActClick,
}) => {
  return (
    <div
      style={{
        marginRight: '30px',
        marginLeft: '16px',
        border: '5px solid #e7e7e7',
      }}
    >
      <Card
        renderAs={Link}
        to={`/community/info/${postID}`}
        style={{
          width: 'auto',
          height: '30px',
          margin: 'auto',
          marginbottom: '30px',
        }}
      >
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={3}>{title}</Heading>
              <br />

              <Heading subtitle size={9}>
                좋아요수: {likeCount} &nbsp; &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;댓글수: {commentCount}
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;클릭수: {viewCount}&nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 닉네임: {userNickname}
              </Heading>

              <br />
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </div>
  );
};

CommunityCardForm.propTypes = {
  postID: PropTypes.number,
  userNickname: PropTypes.string,
  title: PropTypes.string,
  viewCount: PropTypes.number,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  onActClick: PropTypes.func,
};

CommunityCardForm.defaultProps = {
  postID: 0,
  userNickname: 'name',
  title: 'Ability',
  commentCount: 0,
  viewCount: 0,
  likeCount: 0,
  onActClick: () => {
    console.log('hh');
  },
};
