import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({ item }) => {
  return (
    <S.ResRecruit>
      <S.RecruitUl>
        <S.RecruitLi>
          <S.RecruitMean>모집 인원</S.RecruitMean>
          <S.RecruitNum>
            {item.studyMemberNow} / {item.studyMember}
          </S.RecruitNum>
        </S.RecruitLi>
      </S.RecruitUl>
    </S.ResRecruit>
  );
};

RecruitModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
