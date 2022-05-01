import React from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Image, Content, Icon } from 'react-bulma-components';
import * as S from './style';

export const DetailRightCard = ({
  leaderImg,
  leaderName,
  leaderInfo,
  studyLike,
  studyView,
  studyStart,
  studyEnd,
  studyField,
  studySub,
}) => {
  return (
    <S.PageRight>
      <S.RightInfo>
        <S.RightPBig>리더 정보</S.RightPBig>
        <Media>
          <Media.Item align="left">
            <Image src={leaderImg} size={64} />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <p>
                <strong>{leaderName}</strong>
                <br />
                {leaderInfo}
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
                    {studyView}
                  </span>
                  <Icon>
                    <i className="fas fa-heart" />
                  </Icon>
                  <span>{studyLike}</span>
                </small>
              </p>
            </Content>
          </Media.Item>
        </Media>
      </S.RightInfo>

      <S.RightMid>
        <S.RightPBig>스터디 기간</S.RightPBig>
        <S.RightPSmall>
          {studyStart} ~ {studyEnd}
        </S.RightPSmall>
      </S.RightMid>

      <S.RightMid>
        <S.RightPBig>스터디 분야</S.RightPBig>
        <S.RightPSmall>{studyField}</S.RightPSmall>
      </S.RightMid>

      {studySub ? (
        ''
      ) : (
        <S.RightFollow>
          <S.RightPBig>스터디 구독하기</S.RightPBig>
          <Button.Group align="center">
            <Button
              className="is-light"
              color="danger"
              onClick={() => {}}
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
  leaderImg: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  leaderInfo: PropTypes.string.isRequired,
  studyLike: PropTypes.number.isRequired,
  studyView: PropTypes.number.isRequired,
  studyStart: PropTypes.string.isRequired,
  studyEnd: PropTypes.string.isRequired,
  studyField: PropTypes.string.isRequired,
  studySub: PropTypes.bool.isRequired,
};
