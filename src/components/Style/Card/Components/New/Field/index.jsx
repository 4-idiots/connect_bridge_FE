import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const NewField = ({ children }) => {
  return <S.NewField>{children}</S.NewField>;
};

NewField.propTypes = {
  children: PropTypes.string.isRequired,
};
