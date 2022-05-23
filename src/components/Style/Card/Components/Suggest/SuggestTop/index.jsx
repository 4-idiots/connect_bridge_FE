import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import * as S from './style';

export const SuggestTop = ({ name, area, like, view }) => {
  return (
    <S.SuggestTop>
      <S.SuggestName>
        <S.AreaText>[{area}]</S.AreaText>
        &nbsp;{name}
      </S.SuggestName>
      <S.SuggestIconWrap>
        <Icon>
          <i className="fas fa-heart" />
        </Icon>
        <span style={{ margin: '0 10px 0 2px' }}>{like}</span>
        <Icon>
          <i className="fas fa-eye" />
        </Icon>
        <span style={{ marginLeft: 2 }}>{view}</span>
      </S.SuggestIconWrap>
    </S.SuggestTop>
  );
};

SuggestTop.propTypes = {
  area: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
};
