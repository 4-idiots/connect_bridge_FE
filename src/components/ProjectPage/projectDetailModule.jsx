import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Tabs, Button } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import {
  DetailContent,
  DetailHeader,
  DetailRecurit,
  DetailPlatform,
  DetailSkill,
  DetailReference,
  DetailCommentInput,
  DetailCommentLog,
  DetailRightCard,
  DetailMember,
} from './detailComponent/detailRoutes';
import * as S from './detailComponent/style';
import {
  projectGetSomeService,
  projectApplyService,
  projectDeleteService,
} from '../../service';
import { useAuth } from '../../contexts/hooks/useAuth';
import { NoticeTab } from './detailTab/noticeTab';
import { ApplyTab } from './detailTab/applyTab';

export const ProjectDetailForm = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const navigate = useNavigate();

  const { projectID } = useParams();
  const [postData, setPostData] = useState(null);

  const getAxios = async id => {
    try {
      const result = await projectGetSomeService(id);
      console.log(result);
      setPostData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAxios = async id => {
    try {
      const result = await projectDeleteService(id);
      alert('삭제되었습니다.');
      navigate('/project');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    getAxios(projectID);
  }, []);

  const [notice, setNotice] = useState(null);
  const [comment, setComment] = useState('');
  const [where, setWhere] = useState('info');

  const applyService = async (prid, uid, field) => {
    try {
      const result = await projectApplyService(prid, uid, field);
      alert('정상적으로 신청이 되었습니다.');
    } catch (error) {
      alert('이미 신청하셨습니다.');
    }
  };
  if (postData) {
    return (
      <Container style={{ marginTop: 80 }}>
        {postData.projectName && (
          <DetailHeader
            projectOnOff={postData.projectOnOff}
            projectName={postData.projectName}
            leaderImg={postData.leaderInfo.leaderImg}
            leaderName={postData.leaderInfo.leaderName}
          />
        )}
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
                <DetailRecurit
                  uiuxPlan={postData.uiuxPlan}
                  gamePlan={postData.gamePlan}
                  managerPlan={postData.managerPlan}
                  hwPlan={postData.hwPlan}
                  iosFr={postData.iosFr}
                  androidFr={postData.androidFr}
                  webFrontFr={postData.webFrontFr}
                  webPublicFr={postData.webPublicFr}
                  crossFr={postData.crossFr}
                  uiuxDe={postData.uiuxDe}
                  graphicDe={postData.graphicDe}
                  thrdDe={postData.thrdDe}
                  hwDe={postData.hwDe}
                  etcDe={postData.etcDe}
                  webBk={postData.webBk}
                  blchBk={postData.blchBk}
                  aiBk={postData.aiBk}
                  dsBk={postData.dsBk}
                  gameBk={postData.gameBk}
                  planBu={postData.planBu}
                  marketingBu={postData.marketingBu}
                  financeBu={postData.financeBu}
                  salesBu={postData.salesBu}
                  consultBu={postData.consultBu}
                  investBu={postData.investBu}
                  etcBu={postData.etcBu}
                  blogEtc={postData.blogEtc}
                  influEtc={postData.influEtc}
                  compEtc={postData.compEtc}
                  uiuxPlanNow={postData.uiuxPlanNow}
                  gamePlanNow={postData.gamePlanNow}
                  managerPlanNow={postData.managerPlanNow}
                  hwPlanNow={postData.hwPlanNow}
                  iosFrNow={postData.iosFrNow}
                  androidFrNow={postData.androidFrNow}
                  webFrontFrNow={postData.webFrontFrNow}
                  webPublicFrNow={postData.webPublicFrNow}
                  crossFrNow={postData.crossFrNow}
                  uiuxDeNow={postData.uiuxDeNow}
                  graphicDeNow={postData.graphicDeNow}
                  thrdDeNow={postData.thrdDeNow}
                  hwDeNow={postData.hwDeNow}
                  etcDeNow={postData.etcDeNow}
                  webBkNow={postData.webBkNow}
                  blchBkNow={postData.blchBkNow}
                  aiBkNow={postData.aiBkNow}
                  dsBkNow={postData.dsBkNow}
                  gameBkNow={postData.gameBkNow}
                  planBuNow={postData.planBuNow}
                  marketingBuNow={postData.marketingBuNow}
                  financeBuNow={postData.financeBuNow}
                  salesBuNow={postData.salesBuNow}
                  consultBuNow={postData.consultBuNow}
                  investBuNow={postData.investBuNow}
                  etcBuNow={postData.etcBuNow}
                  blogEtcNow={postData.blogEtcNow}
                  influEtcNow={postData.influEtcNow}
                  compEtcNow={postData.compEtcNow}
                  apply={applyService}
                  userID={postData.userID}
                  projectID={Number(projectID)}
                />
                <DetailPlatform projectPlatform={postData.projectPlatform} />
                <DetailContent value={postData.content} />
                <DetailSkill projectSkill={postData.projectSkill} />
                <DetailReference projectReference={postData.projectReference} />
                <DetailMember item={postData.memberID} />
              </S.LeftDetail>
            )}
            {where === 'qna' ? (
              <S.CommentWrap>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  👍 이 모임에 응원 * 질문을 올려주세요!
                </Heading>
                <DetailCommentInput comment={comment} setComment={setComment} />
                <DetailCommentLog />
                {/* 여기는 석환이랑 db 협의가 끝나면 개발 */}
                <S.MediaBox />
              </S.CommentWrap>
            ) : (
              ''
            )}
            {where === 'apply' && (
              <>
                <Button.Group>
                  <Button
                    onClick={() => navigate(`/project/update/${projectID}`)}
                  >
                    수정
                  </Button>
                  <Button
                    onClick={() => {
                      deleteAxios(projectID);
                    }}
                  >
                    삭제
                  </Button>
                </Button.Group>
                <ApplyTab projectID={projectID} />
              </>
            )}
            {where === 'notice' && decodedToken && (
              <NoticeTab
                projectID={projectID}
                isMaster={postData.userID === decodedToken.id}
              />
            )}
          </S.PageLeft>
          <DetailRightCard
            leaderImg={postData.leaderInfo.leaderImg}
            leaderName={postData.leaderInfo.leaderName}
            leaderInfo={postData.leaderInfo.introduce}
            projectField={postData.projectField}
            projectLike={postData.projectLike}
            projectView={postData.projectView}
            projectStart={postData.projectStart}
            projectEnd={postData.projectEnd}
            projectSub={postData.projectSub}
            projectID={projectID}
          />
        </S.PageWrap>
      </Container>
    );
  }
  return null;
};
