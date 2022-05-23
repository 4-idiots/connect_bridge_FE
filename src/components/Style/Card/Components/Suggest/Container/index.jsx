import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const SuggestContainer = ({ children, onClick }) => {
  return <S.SuggestContainer onClick={onClick}>{children}</S.SuggestContainer>;
};

SuggestContainer.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};
