import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const CardImg = ({ onClick, imgSrc }) => {
  return (
    <S.CardImgBox onClick={onClick}>
      <S.CardImg src={imgSrc} />
    </S.CardImgBox>
  );
};

CardImg.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
