import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';

export const NewCard = ({ item }) => {
  const navigate = useNavigate();
  const [stContent, setStContent] = useState(null);
  const [onRecruit, setOnRecruit] = useState(false);

  const getAll = () => {
    let te = '';
    item.content.map(text => {
      return text.children.map(info => {
        // eslint-disable-next-line no-return-assign
        return (te = te.concat(' ', info.text));
      });
    });
    setStContent([
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
    <S.newCardContainer onClick={() => navigate(`/study/${item.studyID}`)}>
      <S.newImg>
        <img
          src={item.studyImg}
          alt="test"
          style={{
            borderRadius: '3%',
            objectFit: 'cover',
            width: '516px',
            height: '230px',
          }}
        />
      </S.newImg>
      <S.newBottom>
        <S.newField>{item.studyField}</S.newField>
        <S.newName>{item.studyName}</S.newName>
        <div style={{ width: '500px', overflow: 'hidden', height: '28px' }}>
          {stContent && <ReadOnlySlate value={stContent} />}
        </div>
        <S.newInfoBox>
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
        </S.newInfoBox>
      </S.newBottom>
    </S.newCardContainer>
  );
};

NewCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
