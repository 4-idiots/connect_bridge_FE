import React, { useState } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';

export const SuggestCard = ({ item }) => {
  const navigate = useNavigate();
  const [onRecruit, setOnRecruit] = useState(false);

  return (
    <S.suggestCardContainer onClick={() => navigate(`/study/${item.studyID}`)}>
      <S.suggestBox>
        <S.suggestImg src={item.studyImg} />
        <S.suggestInfo>
          <S.suggestTop>
            <S.suggestName>{item.studyName}</S.suggestName>
            <S.suggestIconWrap>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <span style={{ margin: '0 10px 0 2px' }}>{item.studyLike}</span>
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <span style={{ marginLeft: 2 }}>{item.studyView}</span>
            </S.suggestIconWrap>
          </S.suggestTop>
          <S.suggestMid>
            <ReadOnlySlate value={item.content} />
          </S.suggestMid>
          <S.suggestBottom>
            <S.newEveBox
              onMouseEnter={() => {
                setOnRecruit(true);
              }}
              onMouseLeave={() => {
                setOnRecruit(false);
              }}
            >
              <S.newreBox>
                모집현황
                <Icon>
                  <i className="fas fa-arrow-up" />
                </Icon>
              </S.newreBox>
              {onRecruit ? <RecruitModal item={item} /> : ''}
            </S.newEveBox>
          </S.suggestBottom>
        </S.suggestInfo>
      </S.suggestBox>
    </S.suggestCardContainer>
  );
};

SuggestCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
