import React, { useState, useEffect } from 'react';
import { Heading, Tag, Icon, Button } from 'react-bulma-components';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';

export const MyCmCard = ({ item, deleteAxios }) => {
  const [content, setContent] = useState('');

  const getAll = () => {
    let te = '';
    JSON.parse(item.contents).map(text => {
      return text.children.map(info => {
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
    <S.CmContainer>
      <S.CmTextBox>
        <Heading size={5}>{item.title}</Heading>
        <S.CmContentBox>
          {content && <ReadOnlySlate value={content} />}
        </S.CmContentBox>
        <S.CmHashTagBox>
          {item.hashtag.map(htag => (
            <Tag key={htag} style={{ marginRight: 10 }}>
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
          <Button style={{ fontSize: 14 }} color="warning">
            수정
          </Button>
          <Button
            style={{ fontSize: 14 }}
            color="danger"
            onClick={() => deleteAxios(item.postID)}
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
  deleteAxios: PropTypes.func.isRequired,
};
