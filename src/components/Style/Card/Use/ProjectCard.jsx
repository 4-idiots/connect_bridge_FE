import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Card } from 'react-bulma-components';
import * as Send from '../../../../services/projectService';
import { useAuth } from '../../../../contexts/hooks/useAuth';
import * as LK from '../../../../RefactorFunc/likeFunc';
import * as C from '../Components/router';

export const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [isHover, setIsHover] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.projectLike);

  const handleLike = async () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(Send.projectLikeService, item.projectID);
  };

  useEffect(() => {
    LK.checkLike(item.projectID, setUsLike, Send.projectLikeCheck);
  }, []);

  return (
    <C.CardContainer
      isHover={isHover}
      mouseEnter={() => {
        setIsHover(true);
      }}
      mouseLeave={() => {
        setIsHover(false);
      }}
    >
      <C.CardImg
        imgSrc={item.projectImg}
        onClick={() => navigate(`/project/${item.projectID}`)}
      />
      <C.CardType cardType />
      <C.LikeBox
        onClick={handleLike}
        decodedToken={decodedToken}
        usLike={usLike}
        onHeart={onHeart}
        mouseEnter={() => {
          setOnHeart(true);
        }}
        mouseLeave={() => {
          setOnHeart(false);
        }}
      />
      <Card.Content onClick={() => navigate(`/project/${item.projectID}`)}>
        <C.MediaTop
          field={item.projectField}
          area={item.projectArea}
          name={item.projectName}
        />
        <C.MediaMid dynLike={dynLike} view={item.projectView} />
        <C.MediaBot
          mouseEnter={() => {
            setOnRecruit(true);
          }}
          mouseLeave={() => {
            setOnRecruit(false);
          }}
          onRecruit={onRecruit}
          item={item}
          isProject
        />
      </Card.Content>
    </C.CardContainer>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
