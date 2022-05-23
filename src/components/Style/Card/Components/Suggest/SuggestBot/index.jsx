/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import * as S from './style';
import { ProjectModal } from '../../Normal/MediaBot/projectModal';
import { StudyModal } from '../../Normal/MediaBot/studyModal';
import { calcMem } from '../../Normal/MediaBot/calcMember';

export const SuggestBot = ({
  mouseEnter,
  mouseLeave,
  onRecruit,
  item,
  isProject,
}) => {
  return (
    <S.SuggestBottom onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <S.SuggestMemberBox>
        <S.SuggestMemberNow>
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
        </S.SuggestMemberNow>
      </S.SuggestMemberBox>
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
    </S.SuggestBottom>
  );
};

SuggestBot.propTypes = {
  onRecruit: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  isProject: PropTypes.bool.isRequired,
};
