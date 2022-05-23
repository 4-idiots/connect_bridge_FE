import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const SuggestContainer = ({ children }) => {
  return <S.SuggestContainer>{children}</S.SuggestContainer>;
};

SuggestContainer.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
