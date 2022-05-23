import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import * as S from './style';

export const MediaMid = ({ dynLike, view }) => {
  return (
    <S.MediaMid style={{ marginBottom: '0.8rem' }}>
      <S.MediaContent>
        <S.IconBox>
          <Icon>
            <i className="fas fa-heart" />
          </Icon>
          <S.IconCount>{dynLike}</S.IconCount>
        </S.IconBox>
        <S.IconBox mar="10px">
          <Icon>
            <i className="fas fa-eye" />
          </Icon>
          <S.IconCount>{view}</S.IconCount>
        </S.IconBox>
      </S.MediaContent>
    </S.MediaMid>
  );
};

MediaMid.propTypes = {
  dynLike: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
};
