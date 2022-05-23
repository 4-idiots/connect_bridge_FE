import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import * as S from './style';

export const MediaTop = ({ field, area, name }) => {
  return (
    <S.MediaWrap>
      <S.MediaTop>
        <Heading subtitle size={7}>
          {field}
        </Heading>
        <Heading size={6}>
          <S.AreaText>[{area}]</S.AreaText>
          &nbsp;{name}
        </Heading>
      </S.MediaTop>
    </S.MediaWrap>
  );
};

MediaTop.propTypes = {
  field: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
