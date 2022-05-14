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
        {item && item.map(it => <MemberCard key={it.memberID} item={it} />)}
      </S.MemberGrid>
    </S.DetailMember>
  );
};

DetailMember.propTypes = {
  item: PropTypes.arrayOf(PropTypes.any).isRequired,
};
