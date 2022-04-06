import React, { useState } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as Gray } from '../../../assets/svg/grayHeart.svg';
import { ReactComponent as Pink } from '../../../assets/svg/pinkHeart.svg';

export const NewCard = ({
  prType,
  isLike,
  thumbnail,
  prField,
  prTitle,
  prLike,
  prView,
  prTotal,
  prUserID,
  prID,
}) => {
  return (
    <S.newCardContainer>
      <S.newImg>
        <img
          src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
          alt="test"
          style={{ borderRadius: '3%' }}
        />
      </S.newImg>
      <S.newBottom>
        <S.newField>O2O</S.newField>
        <S.newName>땡처리 서비스 개발</S.newName>
        <S.newInfoBox>
          <S.heartWrap>
            <S.newHeart>
              <Icon>
                <Gray />
              </Icon>
            </S.newHeart>
            <span>{prView}</span>
          </S.heartWrap>
          <S.newRecruit>모집완료 {JSON.stringify(prTotal)}</S.newRecruit>
        </S.newInfoBox>
      </S.newBottom>
    </S.newCardContainer>
  );
};

NewCard.propTypes = {
  prType: PropTypes.bool.isRequired,
  isLike: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired,
  prField: PropTypes.string.isRequired,
  prTitle: PropTypes.string.isRequired,
  prLike: PropTypes.number.isRequired,
  prView: PropTypes.number.isRequired,
  prTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
  prUserID: PropTypes.number.isRequired,
  prID: PropTypes.number.isRequired,
};
