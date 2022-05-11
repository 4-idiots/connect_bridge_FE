import React from 'react';
import PropTypes from 'prop-types';
import { Card, Media, Image, Heading, Content } from 'react-bulma-components';
import * as S from './style';

export const MemberCard = ({ item }) => {
  return (
    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item align="left">
            <Image size={64} src={item.memberImg} />
          </Media.Item>
          <Media.Item>
            <Heading size={5}>{item.memberNickname}</Heading>
            <Heading subtitle size={6}>
              보러가기
            </Heading>
          </Media.Item>
        </Media>
        <S.MemberCardText>
          <S.MemberCardLeft>{item.memberInterestSub}</S.MemberCardLeft>
          <S.MemberCardRight>{item.memberAbility}</S.MemberCardRight>
        </S.MemberCardText>
        <Content>{item.memberIntroduce}</Content>
      </Card.Content>
    </Card>
  );
};

MemberCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
