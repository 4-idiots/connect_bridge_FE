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
  Notification,
  Block,
  Form,
} from 'react-bulma-components';
import ReadOnlySlate from '../../SlateEditor/ReadOnly';
import * as S from './detailComponent/style';

export const ProjectDetailForm = () => {
  const { projectID } = useParams();
  const [isInfo, setIsInfo] = useState(true);
  const [comment, setComment] = useState('');
  const [test, setTest] = useState({
    projectContent: [
      {
        type: 'paragaph',
        children: [
          { text: '프로젝트를 소' },
          { text: '개 하자면....asdasd', bold: true },
        ],
      },
      {
        type: 'paragaph',
        children: [
          { text: 'a', color: '#a10000', bold: true },
          { color: '#a10000', text: 'sdasd' },
        ],
      },
      { type: 'paragaph', children: [{ text: 'asdasd', color: '#a10000' }] },
      { type: 'blockquote', children: [{ text: 'asdas' }] },
      { type: 'paragaph', children: [{ text: 'das', underline: true }] },
      { type: 'paragaph', children: [{ text: 'dasd' }] },
      { type: 'paragaph', children: [{ text: 'asd' }] },
    ],
  });

  return (
    <Container>
      <S.HeaderWrap>
        <S.HeaderContent>
          <S.ProjectContent>사이드프로젝트</S.ProjectContent>
          <Heading
            size={4}
            style={{ fontWeight: 'bold', fontSize: 38, margin: 24 }}
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
        <S.PageLeft>
          <S.LeftTab>
            <S.TalUl>
              <S.TabLi onClick={() => setIsInfo(true)}>정보</S.TabLi>
              <S.TabLi onClick={() => setIsInfo(false)}>질문</S.TabLi>
            </S.TalUl>
          </S.LeftTab>
          {isInfo && (
            <S.LeftDetail>
              <S.DetailStatus>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  모집 현황
                </Heading>
                <S.StatusUl>
                  <S.StatusLi>
                    <S.StatusBigP>프로젝트 매니저</S.StatusBigP>
                    <S.StatusSmallP>1/1</S.StatusSmallP>
                    <Button color="danger">완료</Button>
                  </S.StatusLi>
                  <S.StatusLi>
                    <S.StatusBigP>UI/UX디자인</S.StatusBigP>
                    <S.StatusSmallP>0/1</S.StatusSmallP>
                    <Button color="info">신청</Button>
                  </S.StatusLi>
                  <S.StatusLi>
                    <S.StatusBigP>웹 서버</S.StatusBigP>
                    <S.StatusSmallP>0/1</S.StatusSmallP>
                    <Button color="info">신청</Button>
                  </S.StatusLi>
                  <S.StatusLi>
                    <S.StatusBigP>크로스플랫폼</S.StatusBigP>
                    <S.StatusSmallP>0/1</S.StatusSmallP>
                    <Button color="info">신청</Button>
                  </S.StatusLi>
                </S.StatusUl>
              </S.DetailStatus>
              <S.DetailPlatform>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  출시 플랫폼
                </Heading>
                <S.PlatformWrap>
                  <S.PlatformText>반응형 웹(PC/모바일)</S.PlatformText>
                  <S.PlatformText>안드로이드 앱</S.PlatformText>
                  <S.PlatformText>PC(윈도우/맥) 프로그램</S.PlatformText>
                </S.PlatformWrap>
              </S.DetailPlatform>
              <S.DetailContent>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  소개
                </Heading>
                <ReadOnlySlate value={test.projectContent} />
              </S.DetailContent>
              <S.SkillWrap>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  기술/언어
                </Heading>
                <S.SkillBox>
                  <Tag color="dark" style={{ marginRight: 10 }} rounded>
                    React
                  </Tag>
                  <Tag color="dark" style={{ marginRight: 10 }} rounded>
                    Java
                  </Tag>
                </S.SkillBox>
              </S.SkillWrap>
              <S.ReferenceWrap>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  참고 링크
                </Heading>
                <Block>
                  <Notification style={{ cursor: 'pointer' }}>
                    http://naver.com
                  </Notification>
                </Block>
              </S.ReferenceWrap>
            </S.LeftDetail>
          )}
          {!isInfo && (
            <S.CommentWrap>
              <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                👍 이 모임에 응원 * 질문을 올려주세요!
              </Heading>
              <S.CustomFormWrap>
                <Form.Field>
                  <Form.Textarea
                    placeholder="이 모임에 응원 * 질문을 올려주세요!"
                    size="medium"
                    value={comment}
                    onChange={e => setComment(e.currentTarget.value)}
                    style={{
                      marginBottom: '20px',
                    }}
                  />
                </Form.Field>
              </S.CustomFormWrap>
              <S.MediaBox>
                <Media>
                  <Media.Item align="left">
                    <Image
                      size={96}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
                    />
                  </Media.Item>
                  <Media.Item align="center">
                    <Content>
                      <p>
                        <strong>amateur</strong>
                        <br />
                        잘 몰라도 괜찮나요?
                        <br />
                        <small>2020-03-29</small>
                      </p>
                    </Content>

                    <Media>
                      <Media.Item align="left">
                        <Image
                          size={96}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy0G31HTq6ikRm8C_nGlHb9yeOTLi4GgQNw&usqp=CAU"
                        />
                      </Media.Item>
                      <Media.Item align="center">
                        <Content>
                          <p>
                            <strong>poeynus</strong>
                            <br />
                            네 끝을 볼 열정만 있으면 된다고 생각합니다.
                            <br />
                            <small>2020-03-30</small>
                          </p>
                        </Content>
                      </Media.Item>
                    </Media>
                  </Media.Item>
                </Media>
              </S.MediaBox>
            </S.CommentWrap>
          )}
        </S.PageLeft>

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
                구독 쾅!
              </Button>
            </Button.Group>
          </S.RightFollow>
        </S.PageRight>
      </S.PageWrap>
    </Container>
  );
};
