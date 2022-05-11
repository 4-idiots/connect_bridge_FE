import React from 'react';
import PropTypes from 'prop-types';
import { Card, Media, Image, Heading, Content } from 'react-bulma-components';
import * as S from './style';

export const MemberCard = ({ item }) => {
  return (
    <Card style={{ width: 280, margin: 'auto', borderRadius: 15 }}>
      <Card.Content>
        <Media>
          <Media.Item align="left">
            <Image size={64} src={item.memberImg} />
          </Media.Item>
          <Media.Item>
            <Heading size={5}>{item.memberName}</Heading>
            <Heading subtitle size={6}>
              프로필 보러가기
            </Heading>
          </Media.Item>
        </Media>
        <S.MemberCardText>
          <S.MemberCardLeft>
            [관심 분야] {item.memberInterestSub}
          </S.MemberCardLeft>
          <S.MemberCardRight>[능력] {item.memberAbility}</S.MemberCardRight>
        </S.MemberCardText>
        <Content
          style={{ fontSize: '18px', height: '60px', overflow: 'hidden' }}
        >
          {item.memberIntroduce}
        </Content>
      </Card.Content>
    </Card>
  );
};

MemberCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
