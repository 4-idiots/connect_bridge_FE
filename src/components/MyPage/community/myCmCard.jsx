/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Heading, Tag, Icon, Button } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { deleteData } from '../../../RefactorFunc/dataControl';
import { myCommunityDelete } from '../../../services/mypageService';
import { arrayToPlain } from '../../../RefactorFunc/cardFunc';

export const MyCmCard = ({ item }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    arrayToPlain(item.contents, setText);
  }, []);

  return (
    <S.CmContainer>
      <S.CmTextBox onClick={() => navigate(`/community/info/${item.postID}`)}>
        <Heading size={5}>{item.title}</Heading>
        <S.CmContentBox>
          {text && <ReadOnlySlate value={text} />}
        </S.CmContentBox>
        <S.CmHashTagBox>
          {item.hashtag.map((htag, id) => (
            <Tag key={id} style={{ marginRight: 10 }}>
              {htag}
            </Tag>
          ))}
        </S.CmHashTagBox>
      </S.CmTextBox>
      <S.CmEventBox>
        <S.CmCountBox>
          <S.CmIconWrap>
            <Icon>
              <i className="fas fa-eye" />
            </Icon>
            <S.CmIconSpan>{item.viewCount}</S.CmIconSpan>
          </S.CmIconWrap>
          <S.CmIconWrap>
            <Icon>
              <i className="fas fa-comment" />
            </Icon>
            <S.CmIconSpan>{item.commentCount}</S.CmIconSpan>
          </S.CmIconWrap>
          <S.CmIconWrap>
            <Icon>
              <i className="fas fa-thumbs-up" />
            </Icon>
            <S.CmIconSpan>{item.likeCount}</S.CmIconSpan>
          </S.CmIconWrap>
        </S.CmCountBox>
        <Button.Group>
          <Button
            style={{ fontSize: 14 }}
            color="warning"
            onClick={() => navigate(`/community/change/${item.postID}`)}
          >
            수정
          </Button>
          <Button
            style={{ fontSize: 14 }}
            color="danger"
            onClick={() =>
              deleteData(item.postID, '/my/info', myCommunityDelete)
            }
          >
            삭제
          </Button>
        </Button.Group>
      </S.CmEventBox>
    </S.CmContainer>
  );
};

MyCmCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
