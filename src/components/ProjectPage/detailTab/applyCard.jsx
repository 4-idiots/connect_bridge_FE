import React from 'react';
import PropTypes from 'prop-types';
import * as B from 'react-bulma-components';
import * as S from './style';
import * as Send from '../../../services/projectService';

export const ApplyCard = ({ item, projectID }) => {
  const onYes = async () => {
    try {
      const result = await Send.projectYesService(projectID, item.submitID);
      alert('승인 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onNo = async () => {
    try {
      const result = await Send.projectNoService(projectID, item.submitID);
      alert('거절 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <B.Card style={{ width: 300, margin: 'auto', borderRadius: 15 }}>
      <B.Card.Content>
        <B.Media>
          <B.Media.Item align="left">
            <B.Image size={64} src={item.img} />
          </B.Media.Item>
          <B.Media.Item>
            <B.Heading size={5}>{item.nickname}</B.Heading>
            <B.Heading subtitle size={6}>
              프로필 보러가기
            </B.Heading>
          </B.Media.Item>
        </B.Media>
        <S.ApplyCardText>
          <S.ApplyCardLeft>{item.interestSub}</S.ApplyCardLeft>
          <S.ApplyCardRight>{item.ability}</S.ApplyCardRight>
        </S.ApplyCardText>
        <B.Content>{item.introduce}</B.Content>
        <B.Button.Group>
          <B.Button onClick={() => onYes}>승인</B.Button>
          <B.Button onClick={() => onNo}>거절</B.Button>
        </B.Button.Group>
      </B.Card.Content>
    </B.Card>
  );
};

ApplyCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  projectID: PropTypes.string.isRequired,
};
