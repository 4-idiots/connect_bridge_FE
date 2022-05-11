import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Media,
  Image,
  Heading,
  Content,
  Button,
} from 'react-bulma-components';
import * as S from './style';
import { projectYesService, projectNoService } from '../../../service';

export const ApplyCard = ({ item, projectID }) => {
  const onYes = async () => {
    try {
      const result = await projectYesService(projectID, item.submitID);
      alert('승인 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onNo = async () => {
    try {
      const result = await projectNoService(projectID, item.submitID);
      alert('거절 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item align="left">
            <Image size={64} src={item.img} />
          </Media.Item>
          <Media.Item>
            <Heading size={5}>{item.nickname}</Heading>
            <Heading subtitle size={6}>
              보러가기
            </Heading>
          </Media.Item>
        </Media>
        <S.ApplyCardText>
          <S.ApplyCardLeft>{item.interestSub}</S.ApplyCardLeft>
          <S.ApplyCardRight>{item.ability}</S.ApplyCardRight>
        </S.ApplyCardText>
        <Content>{item.introduce}</Content>
        <Button.Group>
          <Button onClick={() => onYes}>승인</Button>
          <Button onClick={() => onNo}>거절</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

ApplyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  projectID: PropTypes.string.isRequired,
};
