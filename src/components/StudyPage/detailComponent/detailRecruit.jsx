/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button } from 'react-bulma-components';
import * as S from './style';

export const DetailRecruit = ({
  studyMember,
  studyMemberNow,
  apply,
  userID,
  studyID,
}) => {
  return (
    <S.DetailStatus>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        모집 현황
      </Heading>
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>UI/UX 기획</S.StatusBigP>
          <S.StatusSmallP>
            {studyMemberNow} / {studyMember}
          </S.StatusSmallP>
          {studyMemberNow !== 0 ? (
            <>
              {studyMember === studyMemberNow ? (
                <Button color="danger">완료</Button>
              ) : (
                <Button
                  color="info"
                  onClick={() => {
                    apply(studyID, userID, 'study_member');
                  }}
                >
                  신청
                </Button>
              )}
            </>
          ) : (
            <Button
              color="info"
              onClick={() => {
                apply(studyID, userID, 'study_member');
              }}
            >
              신청
            </Button>
          )}
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};

DetailRecruit.propTypes = {
  studyMember: PropTypes.number.isRequired,
  studyMemberNow: PropTypes.number.isRequired,
  apply: PropTypes.func.isRequired,
  userID: PropTypes.number.isRequired,
  studyID: PropTypes.number.isRequired,
};
