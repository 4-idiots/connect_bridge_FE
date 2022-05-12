/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './comStyle.scss';
import PropTypes from 'prop-types';
import { Tag, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';

export const CommunityCard = ({ item }) => {
  const navigate = useNavigate();
  const [text, setText] = useState(null);

  const getAll = () => {
    let te = '';
    item.contents.map(itext => {
      return itext.children.map(info => {
        // eslint-disable-next-line no-return-assign
        return (te = te.concat(' ', info.text));
      });
    });
    setText(te);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div
      className="blog-card spring-fever"
      onClick={() => navigate(`/community/info/${item.postID}`)}
    >
      <div className="title-content">
        <div className="title-text">{item.title}</div>
        <hr />
        <div className="intro">
          {item.hashtag &&
            item.hashtag.map((tg, id) => (
              <Tag
                key={id}
                style={{ backgroundColor: '#dedede', marginRight: 10 }}
              >
                #{tg}
              </Tag>
            ))}
        </div>
      </div>
      <div className="card-info">{text}</div>
      <div className="utility-info">
        <div>
          <Icon>
            <i className="fas fa-comment" style={{ color: 'white' }} />
          </Icon>
          <span style={{ color: 'white' }}>{item.commentCount}</span>
        </div>
        <div>
          <Icon>
            <i className="fas fa-thumbs-up" style={{ color: 'white' }} />
          </Icon>
          <span style={{ color: 'white' }}>{item.likeCount}</span>
        </div>
        <div>
          <Icon>
            <i className="fas fa-eye" style={{ color: 'white' }} />
          </Icon>
          <span style={{ color: 'white' }}>{item.viewCount}</span>
        </div>
      </div>
      <div className="gradient-overlay" />
      <div className="color-overlay" />
    </div>
  );
};

CommunityCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
