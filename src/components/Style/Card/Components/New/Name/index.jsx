import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const NewName = ({ area, name }) => {
  return (
    <S.NewName>
      <S.AreaText>[{area}]</S.AreaText>
      &nbsp;{name}
    </S.NewName>
  );
};

NewName.propTypes = {
  area: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
