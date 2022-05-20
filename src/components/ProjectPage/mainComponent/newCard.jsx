import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';

export const NewCard = ({ item }) => {
  const navigate = useNavigate();
  const [prContent, setPrContent] = useState();
  const [onRecruit, setOnRecruit] = useState(false);

  const getAll = () => {
    let te = '';
    item.content.map(text => {
      return text.children.map(info => {
        // eslint-disable-next-line no-return-assign
        return (te = te.concat(' ', info.text));
      });
    });
    setPrContent([
      {
        type: 'paragaph',
        children: [{ text: te }],
      },
    ]);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <S.ResNewCard onClick={() => navigate(`/project/${item.projectID}`)}>
      <S.ResNewImg src={item.projectImg} />
      <S.ResNewBottom>
        <S.ResNewField>{item.projectField}</S.ResNewField>
        <S.ResNewName>{item.projectName}</S.ResNewName>
        <S.ResNewContent>
          {prContent && <ReadOnlySlate value={prContent} />}
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
