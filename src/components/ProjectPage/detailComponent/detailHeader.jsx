import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tag } from 'react-bulma-components';
import * as S from './style';

export const DetailHeader = ({
  projectType,
  projectTitle,
  leaderImg,
  leaderName,
  projectStatus,
}) => {
  return (
    <S.HeaderWrap>
      <S.HeaderContent>
        {projectType ? (
          <S.ProjectContent>사이드프로젝트</S.ProjectContent>
        ) : (
          <S.ProjectContent>스터디/네트워킹</S.ProjectContent>
        )}
        <Heading
          size={4}
          style={{ fontWeight: 'bold', fontSize: 38, margin: 24 }}
        >
          {projectTitle}
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
            className={projectStatus ? '' : 'is-light'}
          >
            모집 중
          </Tag>
          <Tag color="info" rounded className={projectStatus ? 'is-light' : ''}>
            진행 중
          </Tag>
        </S.StatusBox>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};

DetailHeader.propTypes = {
  projectType: PropTypes.bool.isRequired,
  projectTitle: PropTypes.string.isRequired,
  leaderImg: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  projectStatus: PropTypes.bool.isRequired,
};
