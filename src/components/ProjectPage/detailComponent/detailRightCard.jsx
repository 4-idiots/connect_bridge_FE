import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Image, Content, Icon } from 'react-bulma-components';
import { projectLikeService } from '../../../services/projectService';
import * as S from './style';

export const DetailRightCard = ({ item, projectID }) => {
  const [like, setLike] = useState(item.projectSub);

  const onLikeClick = async () => {
    try {
      const result = await projectLikeService(projectID);
      setLike(!like);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.PageRight>
      <S.RightInfo>
        <S.RightPBig>리더 정보</S.RightPBig>
        <Media>
          <Media.Item align="left">
            <Image src={item.leaderInfo.leaderImg} size={64} />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <p>
                <strong>{item.leaderInfo.leaderName}</strong>
                <br />
                {item.leaderInfo.leaderInfo}
                <br />
                <small
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon>
                    <i className="fas fa-eye" />
                  </Icon>
                  <span style={{ display: 'block', marginRight: 20 }}>
                    {item.projectView}
                  </span>
                  <Icon>
                    <i className="fas fa-heart" />
                  </Icon>
                  <span>{item.projectLike}</span>
                </small>
              </p>
            </Content>
          </Media.Item>
        </Media>
      </S.RightInfo>

      <S.RightMid>
        <S.RightPBig>프로젝트 기간</S.RightPBig>
        <S.RightPSmall>
          {item.projectStart} ~ {item.projectEnd}
        </S.RightPSmall>
      </S.RightMid>

      <S.RightMid>
        <S.RightPBig>프로젝트 분야</S.RightPBig>
        <S.RightPSmall>{item.projectField}</S.RightPSmall>
      </S.RightMid>

      {like ? (
        <S.RightFollow>
          <S.RightPBig>프로젝트 구독 취소</S.RightPBig>
          <Button.Group align="center">
            <Button
              className="is-light"
              color="danger"
              onClick={onLikeClick}
              size="medium"
              style={{ width: '100%' }}
            >
              구독 취소
            </Button>
          </Button.Group>
        </S.RightFollow>
      ) : (
        <S.RightFollow>
          <S.RightPBig>프로젝트 구독하기</S.RightPBig>
          <Button.Group align="center">
            <Button
              className="is-light"
              color="danger"
              onClick={onLikeClick}
              size="medium"
              style={{ width: '100%' }}
            >
              구독 쾅!
            </Button>
          </Button.Group>
        </S.RightFollow>
      )}
    </S.PageRight>
  );
};

DetailRightCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  projectID: PropTypes.string.isRequired,
};
