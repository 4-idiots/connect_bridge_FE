import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';
import { arrayToPlain } from '../../../RefactorFunc/etcFunc';

export const NewCard = ({ item }) => {
  const navigate = useNavigate();
  const [text, setText] = useState(null);
  const [onRecruit, setOnRecruit] = useState(false);

  useEffect(() => {
    arrayToPlain(item.content, setText);
  }, []);

  return (
    <S.ResNewCard onClick={() => navigate(`/study/${item.studyID}`)}>
      <S.ResNewImg src={item.studyImg} />
      <S.ResNewBottom>
        <S.ResNewField>{item.studyField}</S.ResNewField>
        <S.ResNewName>{item.studyName}</S.ResNewName>
        <S.ResNewContent>
          {text && <ReadOnlySlate value={text} />}
        </S.ResNewContent>
        <S.ResNewInfoBox>
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
          <S.newIconBox>
            <Icon>
              <i className="fas fa-heart" />
              <span style={{ marginLeft: 4 }}>{item.studyLike}</span>
            </Icon>
            <Icon>
              <i className="fas fa-eye" />
              <span style={{ marginLeft: 4 }}>{item.studyView}</span>
            </Icon>
          </S.newIconBox>
        </S.ResNewInfoBox>
      </S.ResNewBottom>
    </S.ResNewCard>
  );
};

NewCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
