/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Heading, Button } from 'react-bulma-components';
import { useAuth } from '../../../contexts/hooks/useAuth';
import * as S from './style';

export const DetailRecruit = ({ item, apply, studyID }) => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  return (
    <S.DetailStatus>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        모집 현황
      </Heading>
      <S.StatusUl>
        <S.StatusLi>
          <S.StatusBigP>누구나 참여가능</S.StatusBigP>
          <S.StatusSmallP>
            {item.studyMemberNow} / {item.studyMember}
          </S.StatusSmallP>
          {decodedToken && item.studyOnOff && decodedToken.id !== item.userID && (
            <>
              {item.studyMemberNow !== 0 ? (
                <>
                  {item.studyMember === item.studyMemberNow ? (
                    <Button color="danger">완료</Button>
                  ) : (
                    <Button
                      color="info"
                      onClick={() => {
                        apply(studyID, 'study');
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
                    apply(studyID, 'study');
                  }}
                >
                  신청
                </Button>
              )}
            </>
          )}
        </S.StatusLi>
      </S.StatusUl>
    </S.DetailStatus>
  );
};

DetailRecruit.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  apply: PropTypes.func.isRequired,
  studyID: PropTypes.string.isRequired,
};
