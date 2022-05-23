import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const NewContainer = ({ children, onClick }) => {
  return <S.NewContainer onClick={onClick}>{children}</S.NewContainer>;
};

NewContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};
