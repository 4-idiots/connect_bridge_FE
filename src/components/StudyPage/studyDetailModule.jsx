import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Tabs, Button } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import * as DR from './detailComponent/detailRoute';
import * as S from '../ProjectPage/detailComponent/style';
import * as Send from '../../services/studyService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { NoticeTab, ApplyTab } from './detailTab/tabRoutes';
import * as Sk from '../skeleton/project/skprRouter';
import { getDetailData, deleteData } from '../../RefactorFunc/dataControl';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const StudyDetailForm = () => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const navigate = useNavigate();

  const { studyID } = useParams();
  const [study, setStudy] = useState(null);
  const [comment, setComment] = useState('');
  const [where, setWhere] = useState('info');

  const applyService = async (stid, field) => {
    try {
      await Send.studyApplyService(stid, field);
      alert('정상적으로 신청이 되었습니다.');
    } catch (error) {
      alert('이미 신청하셨습니다.');
    }
  };

  const stateChange = async () => {
    try {
      await Send.studyStateService(studyID);
      alert('상태가 변경되었습니다.');
    } catch (error) {
      navigate('/study');
    }
  };

  useEffect(() => {
    let mounted = true;
    getDetailData(
      setLoading,
      setStudy,
      Send.studyGetSomeService,
      studyID,
      mounted,
    );
    return () => {
      mounted = false;
    };
  }, []);

  if (study && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Mobile>
          <DR.DetailHeader item={study} />
          <S.PageWrapMobile style={{ padding: 20 }}>
            <S.PageLeft>
              <Tabs size="medium" type="boxed" style={{ marginBottom: 60 }}>
                <Tabs.Tab
                  active={where === 'info'}
                  onClick={() => setWhere('info')}
                >
                  정보
                </Tabs.Tab>
                <Tabs.Tab
                  active={where === 'qna'}
                  onClick={() => setWhere('qna')}
                >
                  질문
                </Tabs.Tab>
                {(study.memberList &&
                  decodedToken &&
                  study.memberList.includes(decodedToken.id)) ||
                (decodedToken && study.userID === decodedToken.id) ? (
                  <Tabs.Tab
                    active={where === 'notice'}
                    onClick={() => setWhere('notice')}
                  >
                    공지
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>공지 🔒</Tabs.Tab>
                )}
                {decodedToken && study.userID === decodedToken.id ? (
                  <Tabs.Tab
                    active={where === 'apply'}
                    onClick={() => setWhere('apply')}
                  >
                    관리
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>관리 🔒</Tabs.Tab>
                )}
              </Tabs>
              {where === 'info' && (
                <S.LeftDetail>
                  <DR.DetailRecruit
                    item={study}
                    apply={applyService}
                    studyID={studyID}
                  />
                  <DR.DetailContent value={study.content} />
                  <DR.DetailKeyward studyKeyward={study.studyKeyward} />
                  <DR.DetailMember item={study.memberID} />
                </S.LeftDetail>
              )}
              {where === 'qna' ? (
                <S.CommentWrap>
                  <Heading
                    size={7}
                    style={{ fontWeight: 'bold', fontSize: 26 }}
                  >
                    👍 이 모임에 응원 * 질문을 올려주세요!
                  </Heading>
                  <DR.DetailCommentInput
                    comment={comment}
                    setComment={setComment}
                  />
                  <DR.DetailCommentLog />
                  <S.MediaBox />
                </S.CommentWrap>
              ) : (
                ''
              )}
              {where === 'apply' && (
                <>
                  <Button.Group align="center">
                    <Button
                      style={{ marginRight: 100 }}
                      color="link"
                      onClick={() => navigate(`/study/update/${studyID}`)}
                    >
                      스터디 수정
                    </Button>
                    <Button
                      style={{ marginRight: 100 }}
                      color={study.studyOnOff ? 'warning' : 'success'}
                      onClick={() => {
                        stateChange();
                      }}
                    >
                      {study.studyOnOff ? '스터디 비활성화' : '스터디 활성화'}
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteData(studyID, '/study', Send.studyDeleteService);
                      }}
                    >
                      스터디 삭제
                    </Button>
                  </Button.Group>
                  <ApplyTab studyID={studyID} member={study.memberID} />
                </>
              )}
              {where === 'notice' && decodedToken && (
                <NoticeTab
                  studyID={studyID}
                  isMaster={study.userID === decodedToken.id}
                />
              )}
            </S.PageLeft>
          </S.PageWrapMobile>
          <DR.DetailRightCard item={study} studyID={Number(studyID)} />
        </Mobile>
        <Tablet>
          <DR.DetailHeader item={study} />
          <S.PageWrapTablet>
            <S.PageLeft>
              <Tabs size="medium" type="boxed" style={{ marginBottom: 60 }}>
                <Tabs.Tab
                  active={where === 'info'}
                  onClick={() => setWhere('info')}
                >
                  정보
                </Tabs.Tab>
                <Tabs.Tab
                  active={where === 'qna'}
                  onClick={() => setWhere('qna')}
                >
                  질문
                </Tabs.Tab>
                {(study.memberList &&
                  decodedToken &&
                  study.memberList.includes(decodedToken.id)) ||
                (decodedToken && study.userID === decodedToken.id) ? (
                  <Tabs.Tab
                    active={where === 'notice'}
                    onClick={() => setWhere('notice')}
                  >
                    공지
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>공지 🔒</Tabs.Tab>
                )}
                {decodedToken && study.userID === decodedToken.id ? (
                  <Tabs.Tab
                    active={where === 'apply'}
                    onClick={() => setWhere('apply')}
                  >
                    관리
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>관리 🔒</Tabs.Tab>
                )}
              </Tabs>
              {where === 'info' && (
                <S.LeftDetail>
                  <DR.DetailRecruit
                    item={study}
                    apply={applyService}
                    studyID={studyID}
                  />
                  <DR.DetailContent value={study.content} />
                  <DR.DetailKeyward studyKeyward={study.studyKeyward} />
                  <DR.DetailMember item={study.memberID} />
                </S.LeftDetail>
              )}
              {where === 'qna' ? (
                <S.CommentWrap>
                  <Heading
                    size={7}
                    style={{ fontWeight: 'bold', fontSize: 26 }}
                  >
                    👍 이 모임에 응원 * 질문을 올려주세요!
                  </Heading>
                  <DR.DetailCommentInput
                    comment={comment}
                    setComment={setComment}
                  />
                  <DR.DetailCommentLog />
                  <S.MediaBox />
                </S.CommentWrap>
              ) : (
                ''
              )}
              {where === 'apply' && (
                <>
                  <Button.Group align="center">
                    <Button
                      style={{ marginRight: 100 }}
                      color="link"
                      onClick={() => navigate(`/study/update/${studyID}`)}
                    >
                      스터디 수정
                    </Button>
                    <Button
                      style={{ marginRight: 100 }}
                      color={study.studyOnOff ? 'warning' : 'success'}
                      onClick={() => {
                        stateChange();
                      }}
                    >
                      {study.studyOnOff ? '스터디 비활성화' : '스터디 활성화'}
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteData(studyID, '/study', Send.studyDeleteService);
                      }}
                    >
                      스터디 삭제
                    </Button>
                  </Button.Group>
                  <ApplyTab studyID={studyID} member={study.memberID} />
                </>
              )}
              {where === 'notice' && decodedToken && (
                <NoticeTab
                  studyID={studyID}
                  isMaster={study.userID === decodedToken.id}
                />
              )}
            </S.PageLeft>
            <DR.DetailRightCard item={study} studyID={Number(studyID)} />
          </S.PageWrapTablet>
        </Tablet>
        <Desktop>
          <DR.DetailHeader item={study} />
          <S.PageWrap>
            <S.PageLeft>
              <Tabs size="medium" type="boxed" style={{ marginBottom: 60 }}>
                <Tabs.Tab
                  active={where === 'info'}
                  onClick={() => setWhere('info')}
                >
                  정보
                </Tabs.Tab>
                <Tabs.Tab
                  active={where === 'qna'}
                  onClick={() => setWhere('qna')}
                >
                  질문
                </Tabs.Tab>
                {(study.memberList &&
                  decodedToken &&
                  study.memberList.includes(decodedToken.id)) ||
                (decodedToken && study.userID === decodedToken.id) ? (
                  <Tabs.Tab
                    active={where === 'notice'}
                    onClick={() => setWhere('notice')}
                  >
                    공지
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>공지 🔒</Tabs.Tab>
                )}
                {decodedToken && study.userID === decodedToken.id ? (
                  <Tabs.Tab
                    active={where === 'apply'}
                    onClick={() => setWhere('apply')}
                  >
                    관리
                  </Tabs.Tab>
                ) : (
                  <Tabs.Tab>관리 🔒</Tabs.Tab>
                )}
              </Tabs>
              {where === 'info' && (
                <S.LeftDetail>
                  <DR.DetailRecruit
                    item={study}
                    apply={applyService}
                    studyID={studyID}
                  />
                  <DR.DetailContent value={study.content} />
                  <DR.DetailKeyward studyKeyward={study.studyKeyward} />
                  <DR.DetailMember item={study.memberID} />
                </S.LeftDetail>
              )}
              {where === 'qna' ? (
                <S.CommentWrap>
                  <Heading
                    size={7}
                    style={{ fontWeight: 'bold', fontSize: 26 }}
                  >
                    👍 이 모임에 응원 * 질문을 올려주세요!
                  </Heading>
                  <DR.DetailCommentInput
                    comment={comment}
                    setComment={setComment}
                  />
                  <DR.DetailCommentLog />
                  <S.MediaBox />
                </S.CommentWrap>
              ) : (
                ''
              )}
              {where === 'apply' && (
                <>
                  <Button.Group align="center">
                    <Button
                      style={{ marginRight: 100 }}
                      color="link"
                      onClick={() => navigate(`/study/update/${studyID}`)}
                    >
                      스터디 수정
                    </Button>
                    <Button
                      style={{ marginRight: 100 }}
                      color={study.studyOnOff ? 'warning' : 'success'}
                      onClick={() => {
                        stateChange();
                      }}
                    >
                      {study.studyOnOff ? '스터디 비활성화' : '스터디 활성화'}
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteData(studyID, '/study', Send.studyDeleteService);
                      }}
                    >
                      스터디 삭제
                    </Button>
                  </Button.Group>
                  <ApplyTab studyID={studyID} member={study.memberID} />
                </>
              )}
              {where === 'notice' && decodedToken && (
                <NoticeTab
                  studyID={studyID}
                  isMaster={study.userID === decodedToken.id}
                />
              )}
            </S.PageLeft>
            <DR.DetailRightCard item={study} studyID={Number(studyID)} />
          </S.PageWrap>
        </Desktop>
      </Container>
    );
  }
  return (
    <Container style={{ marginTop: 80 }}>
      <Sk.SkelHeader />
      <S.PageWrap>
        <S.PageLeft>
          <Sk.SkelTabs />
          <S.LeftDetail>
            <Sk.SkelRecruit />
            <Sk.SkelContent />
            <Sk.SkelSkill />
            <Sk.SkelTeam />
          </S.LeftDetail>
          {where === 'notice' && <Sk.SkelNotice />}
          {where === 'apply' && <Sk.SkelApply />}
        </S.PageLeft>
        <Sk.SkelRightCard />
      </S.PageWrap>
    </Container>
  );
};
