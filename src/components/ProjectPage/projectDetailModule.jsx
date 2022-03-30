import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Heading,
  Tag,
  Media,
  Image,
  Content,
  Icon,
  Button,
} from 'react-bulma-components';
import * as S from './detailComponent/style';

export const ProjectDetailForm = () => {
  const { projectID } = useParams();

  return (
    <Container>
      <S.HeaderWrap>
        <S.HeaderContent>
          <S.ProjectContent>사이드프로젝트</S.ProjectContent>
          <Heading
            size={4}
            style={{ fontWeight: 'bold', fontSize: 34, margin: 24 }}
          >
            웹소설 웹툰 IP 웹 3.0
          </Heading>
          <S.LeaderWrap>
            <S.LeaderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU" />
            <S.LeaderName>배고픈개발자</S.LeaderName>
          </S.LeaderWrap>
          <S.StatusBox>
            <Tag color="info" rounded style={{ marginRight: 10 }}>
              모집 중
            </Tag>
            <Tag color="info" className="is-light" rounded>
              진행 중
            </Tag>
          </S.StatusBox>
        </S.HeaderContent>
      </S.HeaderWrap>

      <S.PageWrap>
        <S.PageLeft>asd</S.PageLeft>
        <S.PageRight>
          <S.RightInfo>
            <S.RightPBig>리더 정보</S.RightPBig>
            <Media>
              <Media.Item align="left">
                <Image
                  src="http://bulma.io/images/placeholders/128x128.png"
                  size={64}
                />
              </Media.Item>
              <Media.Item align="center">
                <Content>
                  <p>
                    <strong>배고픈개발자</strong>
                    <br />
                    사진 찍는걸 좋아하는 개발자 입니다.
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
                        1234
                      </span>
                      <Icon>
                        <i className="fas fa-heart" />
                      </Icon>
                      <span>64</span>
                    </small>
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </S.RightInfo>

          <S.RightMid>
            <S.RightPBig>프로젝트 기간</S.RightPBig>
            <S.RightPSmall>22.03.11 ~ 22.09.11</S.RightPSmall>
          </S.RightMid>
          <S.RightMid>
            <S.RightPBig>프로젝트 분야</S.RightPBig>
            <S.RightPSmall>이커머스</S.RightPSmall>
          </S.RightMid>
          <S.RightFollow>
            <S.RightPBig>프로젝트 구독하기</S.RightPBig>
            <Button.Group align="center">
              <Button
                className="is-light"
                color="danger"
                onClick={() => {}}
                size="medium"
                style={{ width: '100%' }}
              >
                구독하기
              </Button>
            </Button.Group>
          </S.RightFollow>
        </S.PageRight>
      </S.PageWrap>
    </Container>
  );
};
