import React, { useState } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CustomDiv } from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';

export const ProjectCard = ({
  prType,
  isLike,
  thumbnail,
  prField,
  prTitle,
  prLike,
  prView,
  prTotal,
  prUserID,
  prID,
}) => {
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);
  const [usLike, setUsLike] = useState(isLike); // 나중에 통신 완성 되면 이거랑 밑에 state 제거 됨
  const [onHeart, setOnHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(prLike);

  const handleLike = now => {
    return (
      setUsLike(!usLike),
      now ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1)
    );
  };

  return (
    <Card
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
          : {
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        onClick={() => navigate(`/project/${prID}`)}
        className="imgclick"
        role="presentation"
      >
        <img
          src={thumbnail}
          style={{
            width: '100%',
            height: '160px',
            borderRadius: '5%',
            objectFit: 'cover',
          }}
          alt="img"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 5,
          left: 10,
          backgroundColor: 'black',
          color: 'white',
          padding: 5,
          fontWeight: 'bold',
        }}
      >
        {prType ? '사이드프로젝트' : '스터디/네트워킹'}
      </div>
      <CustomDiv
        onClick={() => handleLike(!usLike)}
        onMouseEnter={() => {
          setOnHeart(true);
        }}
        onMouseLeave={() => {
          setOnHeart(false);
        }}
      >
        {usLike ? (
          <Icon>
            <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'} />
          </Icon>
        ) : (
          <Icon>
            <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(128,128,128)'} />
          </Icon>
        )}
      </CustomDiv>
      <Card.Content onClick={() => navigate(`/project/${prID}`)}>
        <Media style={{ marginBottom: 0 }}>
          <Media.Item>
            <Heading subtitle size={7}>
              {prField}
            </Heading>
            <Heading size={6}>{prTitle}</Heading>
          </Media.Item>
        </Media>
        <Media style={{ marginBottom: '0.8rem' }}>
          <Content
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              {likeCount}
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '1rem' }}>
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              {prView}
            </div>
          </Content>
        </Media>
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(219, 219, 219, 0.5)',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'rgba(219, 219, 219, 0.5)',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          모집완료 {JSON.stringify(prTotal)}
        </div>
      </Card.Content>
    </Card>
  );
};

ProjectCard.propTypes = {
  prType: PropTypes.bool.isRequired,
  isLike: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired,
  prField: PropTypes.string.isRequired,
  prTitle: PropTypes.string.isRequired,
  prLike: PropTypes.number.isRequired,
  prView: PropTypes.number.isRequired,
  prTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
  prUserID: PropTypes.number.isRequired,
  prID: PropTypes.number.isRequired,
};
