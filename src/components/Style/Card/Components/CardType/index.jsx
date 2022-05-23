import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const CardType = ({ cardType }) => {
  return (
    <S.CardType>{cardType ? '사이드프로젝트' : '스터디/네트워킹'}</S.CardType>
  );
};

CardType.propTypes = {
  cardType: PropTypes.bool.isRequired,
};
