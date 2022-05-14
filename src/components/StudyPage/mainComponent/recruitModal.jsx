import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({ item }) => {
  return (
    <S.DetailStatus>
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>모집 인원</S.StatusBigP>
          <S.StatusSmallP>
            {item.studyMember} / {item.studyMember}
          </S.StatusSmallP>
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};

RecruitModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
