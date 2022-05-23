import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const NewBottom = ({ children }) => {
  return <S.NewBottom>{children}</S.NewBottom>;
};

NewBottom.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
