import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Card } from 'react-bulma-components';
import * as Send from '../../../../services/studyService';
import { useAuth } from '../../../../contexts/hooks/useAuth';
import * as LK from '../../../../RefactorFunc/likeFunc';
import * as C from '../Components/router';

export const StudyCard = ({ item }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [isHover, setIsHover] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [usLike, setUsLike] = useState(true);
  const [dynLike, setDynLike] = useState(item.studyLike);

  const handleLike = async () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(Send.studyLikeService, item.studyID);
  };

  useEffect(() => {
    LK.checkLike(item.studyID, setUsLike, Send.studyLikeCheck);
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
        imgSrc={item.studyImg}
        onClick={() => navigate(`/study/${item.studyID}`)}
      />
      <C.CardType cardType={false} />
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
      <Card.Content onClick={() => navigate(`/study/${item.studyID}`)}>
        <C.MediaTop
          field={item.studyField}
          area={item.studyArea}
          name={item.studyName}
        />
        <C.MediaMid dynLike={dynLike} view={item.studyView} />
        <C.MediaBot
          mouseEnter={() => {
            setOnRecruit(true);
          }}
          mouseLeave={() => {
            setOnRecruit(false);
          }}
          onRecruit={onRecruit}
          item={item}
          isProject={false}
        />
      </Card.Content>
    </C.CardContainer>
  );
};

StudyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
