/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tag, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { useAuth } from '../../../contexts/hooks/useAuth';

export const CommunityCard = ({ item }) => {
  const navigate = useNavigate();
  const [text, setText] = useState(null);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.likeCount);

  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const handleLike = async () => {
    if (usLike) {
      setDynLike(dynLike - 1);
    } else {
      setDynLike(dynLike + 1);
    }
    setUsLike(!usLike);
    // try {
    //   const result = await Send.projectLikeService(item.projectID);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
    <div className="blog-card spring-fever" style={{ position: 'relative' }}>
      <div className="title-content">
        <div style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}>
          {decodedToken ? (
            <div
              onClick={handleLike}
              onMouseEnter={() => {
                setOnHeart(true);
              }}
              onMouseLeave={() => {
                setOnHeart(false);
              }}
            >
              {usLike ? (
                <Icon>
                  <Heart
                    fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'}
                  />
                </Icon>
              ) : (
                <Icon>
                  <Heart
                    fill={onHeart ? 'rgb(211,211,211)' : 'rgb(128,128,128)'}
                  />
                </Icon>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          className="title-text"
          onClick={() => navigate(`/community/info/${item.postID}`)}
        >
          {item.title}
        </div>
        <hr />
        <div
          className="intro"
          onClick={() => navigate(`/community/info/${item.postID}`)}
        >
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
      <div
        className="card-info"
        onClick={() => navigate(`/community/info/${item.postID}`)}
      >
        {text}
      </div>
      <div
        className="utility-info"
        onClick={() => navigate(`/community/info/${item.postID}`)}
      >
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
