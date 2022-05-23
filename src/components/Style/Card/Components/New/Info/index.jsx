/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import * as S from './style';
import { calcMem } from '../../Normal/MediaBot/calcMember';
import { ProjectModal } from '../../Normal/MediaBot/projectModal';
import { StudyModal } from '../../Normal/MediaBot/studyModal';

export const NewInfo = ({
  mouseEnter,
  mouseLeave,
  onRecruit,
  like,
  view,
  item,
  isProject,
}) => {
  return (
    <S.NewInfoBox>
      <S.NewMemberBox onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <S.NewMemberNow>
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
        </S.NewMemberNow>
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
      </S.NewMemberBox>
      <S.NewIconBox>
        <Icon>
          <i className="fas fa-heart" />
          <span style={{ marginLeft: 4 }}>{like}</span>
        </Icon>
        <Icon style={{ marginLeft: 10 }}>
          <i className="fas fa-eye" />
          <span style={{ marginLeft: 4 }}>{view}</span>
        </Icon>
      </S.NewIconBox>
    </S.NewInfoBox>
  );
};

NewInfo.propTypes = {
  onRecruit: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  isProject: PropTypes.bool.isRequired,
  like: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
};
