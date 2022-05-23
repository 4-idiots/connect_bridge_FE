import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const NewImg = ({ imgSrc }) => {
  return <S.NewImg src={imgSrc} />;
};

NewImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
