/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({ studyMember, studyMemberNow }) => {
  return (
    <S.DetailStatus>
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>모집 인원</S.StatusBigP>
          <S.StatusSmallP>
            {studyMemberNow} / {studyMember}
          </S.StatusSmallP>
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};

RecruitModal.propTypes = {
  studyMember: PropTypes.number,
  studyMemberNow: PropTypes.number,
};

RecruitModal.defaultProps = {
  studyMember: 0,
  studyMemberNow: 0,
};
