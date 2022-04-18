import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';

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
  prContent,
}) => {
  const [content, setContent] = useState();
  const getAll = () => {
    let te = '';
    prContent.map(item => {
      return item.children.map(info => {
        // eslint-disable-next-line no-return-assign
        return (te = te.concat(' ', info.text));
      });
    });
    setContent([
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
    <S.newCardContainer>
      <S.newImg>
        <img
          src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
          alt="test"
          style={{ borderRadius: '3%', objectFit: 'cover' }}
        />
      </S.newImg>
      <S.newBottom>
        <S.newField>O2O</S.newField>
        <S.newName>땡처리 서비스 개발</S.newName>
        <div style={{ width: '500px', overflow: 'hidden', height: '28px' }}>
          {content && <ReadOnlySlate value={content} />}
        </div>
        <S.newInfoBox>
          <S.heartWrap>
            <S.newHeart>
              <Icon>
                <Heart fill="rgb(128,128,128)" />
              </Icon>
            </S.newHeart>
            <span>{prView}</span>
          </S.heartWrap>
          <S.newRecruit>모집완료</S.newRecruit>
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
  prContent: PropTypes.arrayOf(PropTypes.any).isRequired,
  prID: PropTypes.number.isRequired,
};
