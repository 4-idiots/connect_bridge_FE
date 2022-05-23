/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import * as S from './style';
import { calcMem } from './calcMember';
import { ProjectModal } from './projectModal';
import { StudyModal } from './studyModal';

export const MediaBot = ({
  onRecruit,
  item,
  mouseEnter,
  mouseLeave,
  isProject,
}) => {
  return (
    <S.MediaBot onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <S.RecruitBox>
        모집현황
        {isProject ? (
          <S.RecruitCount>{calcMem(item)}</S.RecruitCount>
        ) : (
          <S.RecruitCount>
            {item.studyMemberNow}/{item.studyMember}
          </S.RecruitCount>
        )}
        <Icon>
          <i className="fas fa-arrow-up" />
        </Icon>
      </S.RecruitBox>
      {onRecruit ? (
        <>
          {isProject ? (
            <ProjectModal item={item} />
          ) : (
            <StudyModal item={item} />
          )}
        </>
      ) : (
        ''
      )}
    </S.MediaBot>
  );
};

MediaBot.propTypes = {
  onRecruit: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  isProject: PropTypes.bool.isRequired,
};
