import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const SuggestInfo = ({ children }) => {
  return <S.SuggestInfo>{children}</S.SuggestInfo>;
};

SuggestInfo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
