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
  const [text, setText] = useState();
  const [onRecruit, setOnRecruit] = useState(false);

  useEffect(() => {
    arrayToPlain(item.content, setText);
  }, []);

  return (
    <S.ResNewCard onClick={() => navigate(`/project/${item.projectID}`)}>
      <S.ResNewImg src={item.projectImg} />
      <S.ResNewBottom>
        <S.ResNewField>{item.projectField}</S.ResNewField>
        <S.ResNewName>
          <span style={{ color: '#716666' }}>[{item.projectArea}]</span>
          &nbsp;{item.projectName}
        </S.ResNewName>
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
              <span style={{ marginLeft: 4 }}>{item.projectLike}</span>
            </Icon>
            <Icon>
              <i className="fas fa-eye" />
              <span style={{ marginLeft: 4 }}>{item.projectView}</span>
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
