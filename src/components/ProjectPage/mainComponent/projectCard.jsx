import React, { useState } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import fetcher from '../../../swr/fetcher';
import { CustomDiv } from './style';
import { ReactComponent as Gray } from '../../../assets/svg/grayHeart.svg';
import { ReactComponent as Pink } from '../../../assets/svg/pinkHeart.svg';

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
  const { mutate } = useSWRConfig(); // 여기가 아니라 main에서 사용해야 함
  const { data } = useSWR('test', fetcher);

  const [isHover, setIsHover] = useState(false);
  const [usLike, setUsLike] = useState(isLike); // 나중에 통신 완성 되면 이거랑 밑에 state 제거 됨
  const [likeCount, setLikeCount] = useState(prLike);

  const likeAxios = async () => {
    try {
      const result = await axios.get('test');
    } catch (error) {
      console.log('error');
    }
  };

  const handleLike = now => {
    return (
      setUsLike(!usLike),
      now ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1),
      mutate('test', { ...data, like: !usLike }, false),
      likeAxios()
    );
  };

  return (
    <Card
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
              width: 285,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
          : {
              width: 285,
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
          style={{ width: '100%', height: '160px', borderRadius: '5%' }}
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
      {usLike ? (
        <CustomDiv onClick={() => handleLike(true)}>
          <Icon>
            <Pink />
          </Icon>
        </CustomDiv>
      ) : (
        <CustomDiv onClick={() => handleLike(false)}>
          <Icon>
            <Gray />
          </Icon>
        </CustomDiv>
      )}
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
