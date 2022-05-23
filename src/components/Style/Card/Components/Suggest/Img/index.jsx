import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const SuggestImg = ({ imgSrc }) => {
  return <S.SuggestImg src={imgSrc} />;
};

SuggestImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
