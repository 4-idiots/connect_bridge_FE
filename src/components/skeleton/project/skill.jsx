import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelSkill = () => {
  return (
    <S.SkillWrap>
      <Skeleton width={140} height={36} />
      <S.SkillBox>
        <Skeleton width={60} height={30} style={{ margin: '30px 20px 0 0' }} />
        <Skeleton width={60} height={30} style={{ marginTop: 30 }} />
      </S.SkillBox>
    </S.SkillWrap>
  );
};
