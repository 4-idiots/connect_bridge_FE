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
    <S.ResSuggestContainer
      onClick={() => navigate(`/project/${item.projectID}`)}
    >
      <S.ResSuggestBox>
        <S.ResSuggestImg src={item.projectImg} />
        <S.ResSuggestInfo>
          <S.ResSuggestTop>
            <S.ResSuggestName>
              <span style={{ color: '#716666' }}>[{item.projectArea}]</span>
              &nbsp;{item.projectName}
            </S.ResSuggestName>
            <S.ResSuggestIconWrap>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <span style={{ margin: '0 10px 0 2px' }}>{item.projectLike}</span>
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <span style={{ marginLeft: 2 }}>{item.projectView}</span>
            </S.ResSuggestIconWrap>
          </S.ResSuggestTop>
          <S.ResSuggestMid>
            <ReadOnlySlate value={item.content} />
          </S.ResSuggestMid>
          <S.ResSuggestBottom>
            <S.ResNewMemberBox
              onMouseEnter={() => {
                setOnRecruit(true);
              }}
              onMouseLeave={() => {
                setOnRecruit(false);
              }}
            >
              <S.ResMemberNow>
                모집현황
                <Icon>
                  <i className="fas fa-arrow-up" />
                </Icon>
              </S.ResMemberNow>
              {onRecruit ? <RecruitModal item={item} /> : ''}
            </S.ResNewMemberBox>
          </S.ResSuggestBottom>
        </S.ResSuggestInfo>
      </S.ResSuggestBox>
    </S.ResSuggestContainer>
  );
};

SuggestCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
