import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const SuggestBox = ({ children }) => {
  return <S.SuggestBox>{children}</S.SuggestBox>;
};

SuggestBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
