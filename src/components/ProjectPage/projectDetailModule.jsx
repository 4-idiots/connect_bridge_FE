import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Tabs, Button } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import * as DR from './detailComponent/detailRoutes';
import * as S from './detailComponent/style';
import * as Send from '../../services/projectService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { NoticeTab, ApplyTab } from './detailTab/tabRoutes';
import * as Sk from '../skeleton/project/skprRouter';
import { getDetailData, deleteData } from '../../RefactorFunc/dataControl';

export const ProjectDetailForm = () => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const navigate = useNavigate();

  const { projectID } = useParams();
  const [postData, setPostData] = useState(null);
  const [comment, setComment] = useState('');
  const [where, setWhere] = useState('info');

  useEffect(() => {
    getDetailData(
      setLoading,
      setPostData,
      Send.projectGetSomeService,
      projectID,
    );
  }, []);

  const applyService = async (prid, uid, field) => {
    try {
      await Send.projectApplyService(prid, uid, field);
      alert('정상적으로 신청이 되었습니다.');
    } catch (error) {
      alert('이미 신청하셨습니다.');
    }
  };

  const stateChange = async () => {
    try {
      await Send.projectStateService(projectID);
      alert('상태가 변경되었습니다.');
    } catch (error) {
      // pass
    }
  };

  if (postData && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <DR.DetailHeader item={postData} />
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
              {(postData.memberList &&
                decodedToken &&
                postData.memberList.includes(decodedToken.id)) ||
              (decodedToken && postData.userID === decodedToken.id) ? (
                <Tabs.Tab
                  active={where === 'notice'}
                  onClick={() => setWhere('notice')}
                >
                  공지
                </Tabs.Tab>
              ) : (
                <Tabs.Tab>공지 🔒</Tabs.Tab>
              )}
              {decodedToken && postData.userID === decodedToken.id ? (
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
                <DR.DetailRecurit
                  item={postData}
                  apply={applyService}
                  projectID={Number(projectID)}
                />
                <DR.DetailPlatform projectPlatform={postData.projectPlatform} />
                <DR.DetailContent value={postData.content} />
                <DR.DetailSkill projectSkill={postData.projectSkill} />
                <DR.DetailReference
                  projectReference={postData.projectReference}
                />
                <DR.DetailMember item={postData.memberID} />
              </S.LeftDetail>
            )}
            {where === 'qna' ? (
              <S.CommentWrap>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
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
                    style={{ marginRight: 'min(2vw, 100px)' }}
                    color="link"
                    onClick={() => navigate(`/project/update/${projectID}`)}
                  >
                    프로젝트 수정
                  </Button>
                  <Button
                    style={{ marginRight: 'min(2vw, 100px)' }}
                    color={postData.projectOnOff ? 'warning' : 'success'}
                    onClick={() => {
                      stateChange();
                    }}
                  >
                    {postData.projectOnOff
                      ? '프로젝트 비활성화'
                      : '프로젝트 활성화'}
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      deleteData(
                        projectID,
                        '/project',
                        Send.projectDeleteService,
                      );
                    }}
                  >
                    프로젝트 삭제
                  </Button>
                </Button.Group>
                <ApplyTab projectID={projectID} member={postData.memberID} />
              </>
            )}
            {where === 'notice' && decodedToken && (
              <NoticeTab
                projectID={projectID}
                isMaster={postData.userID === decodedToken.id}
              />
            )}
          </S.PageLeft>
          <DR.DetailRightCard item={postData} projectID={projectID} />
        </S.PageWrap>
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
            <Sk.SkelPlatform />
            <Sk.SkelContent />
            <Sk.SkelSkill />
            <Sk.SkelReference />
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
