import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import * as S from './style';
import { MemberCard } from './memberCard';

export const DetailMember = ({ item }) => {
  return (
    <S.DetailMember>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        멤버
      </Heading>
      <S.MemberGrid>
        {item && item.length !== 0 ? (
          <>
            {item.map(it => (
              <MemberCard key={it.memberID} item={it} />
            ))}
          </>
        ) : (
          <S.PSBox>
            <S.PSNull>
              <S.PSText>아직 스터디에 참가중인 팀원이 없습니다.</S.PSText>
            </S.PSNull>
          </S.PSBox>
        )}
      </S.MemberGrid>
    </S.DetailMember>
  );
};

DetailMember.propTypes = {
  item: PropTypes.arrayOf(PropTypes.any).isRequired,
};
