import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tag } from 'react-bulma-components';
import * as S from './style';

export const DetailHeader = ({ item }) => {
  return (
    <S.HeaderWrap>
      <S.HeaderContent>
        <S.ProjectContent>사이드프로젝트</S.ProjectContent>
        <Heading
          size={4}
          style={{ fontWeight: 'bold', fontSize: 38, margin: 24 }}
        >
          {item.projectName}
        </Heading>
        <S.LeaderWrap>
          <S.LeaderImg src={item.leaderInfo.leaderImg} />
          <S.LeaderName>{item.leaderInfo.leaderName}</S.LeaderName>
        </S.LeaderWrap>
        <S.StatusBox>
          <Tag
            color="info"
            rounded
            style={{ marginRight: 10 }}
            className={item.projectOnOff ? '' : 'is-light'}
          >
            모집 중
          </Tag>
          <Tag
            color="info"
            rounded
            className={item.projectOnOff ? 'is-light' : ''}
          >
            진행 중
          </Tag>
        </S.StatusBox>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};

DetailHeader.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
