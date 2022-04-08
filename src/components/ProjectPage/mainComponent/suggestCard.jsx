import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';

export const SuggestCard = () => {
  return (
    <S.suggestCardContainer>
      <S.suggestBox>
        <S.suggestImg src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png" />
        <S.suggestInfo>
          <S.suggestTop>
            <S.suggestName>스마트팜교육메타버스아바타챗봇</S.suggestName>
            <S.suggestIconWrap>
              <S.suggestHeart>
                <Icon>
                  <Heart fill="rgb(128,128,128)" />
                </Icon>
              </S.suggestHeart>
              <span>23</span>
            </S.suggestIconWrap>
          </S.suggestTop>

          <S.suggestMid>
            <ReadOnlySlate
              value={[
                {
                  type: 'paragaph',
                  children: [
                    {
                      text: '프로젝트를 소 개 하자면....asdasd a sdasd asdasd asdas das dasd asd',
                    },
                  ],
                },
              ]}
            />
          </S.suggestMid>
          <S.suggestBottom>
            <S.newRecruit>[모집]UI/UX디자인</S.newRecruit>
          </S.suggestBottom>
        </S.suggestInfo>
      </S.suggestBox>
    </S.suggestCardContainer>
  );
};
