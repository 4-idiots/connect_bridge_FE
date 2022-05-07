import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tag } from 'react-bulma-components';
import * as S from './style';

export const DetailHeader = ({
  studyName,
  leaderImg,
  leaderName,
  studyOnOff,
}) => {
  return (
    <S.HeaderWrap>
      <S.HeaderContent>
        <S.ProjectContent>스터디/네트워킹</S.ProjectContent>
        <Heading
          size={4}
          style={{ fontWeight: 'bold', fontSize: 38, margin: 24 }}
        >
          {studyName}
        </Heading>
        <S.LeaderWrap>
          <S.LeaderImg src={leaderImg} />
          <S.LeaderName>{leaderName}</S.LeaderName>
        </S.LeaderWrap>
        <S.StatusBox>
          <Tag
            color="info"
            rounded
            style={{ marginRight: 10 }}
            className={studyOnOff ? '' : 'is-light'}
          >
            모집 중
          </Tag>
          <Tag color="info" rounded className={studyOnOff ? 'is-light' : ''}>
            진행 중
          </Tag>
        </S.StatusBox>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};

DetailHeader.propTypes = {
  studyName: PropTypes.string.isRequired,
  leaderImg: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  studyOnOff: PropTypes.bool.isRequired,
};