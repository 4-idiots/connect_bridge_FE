import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Tabs } from 'react-bulma-components';
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
} from './detailComponent/detailRoutes';
import * as S from './detailComponent/style';
import {
  projectGetSomeService,
  projectApplyService,
  projectDeleteService,
} from '../../service';
import { useAuth } from '../../contexts/hooks/useAuth';

export const ProjectDetailForm = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const navigate = useNavigate();

  const { projectID } = useParams();
  const [postData, setPostData] = useState({});

  const getAxios = async id => {
    try {
      const result = await projectGetSomeService(id);
      console.log(result.data);
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

  const {
    userID,
    projectTotal,
    projectImg,
    projectArea,
    projectOnOff,
    projectName,
    projectField,
    projectSkill,
    projectReference,
    content,
    projectStart,
    projectEnd,
    projectPlatform,
    projectLike,
    projectView,
    uiuxPlan,
    gamePlan,
    managerPlan,
    hwPlan,
    iosFr,
    androidFr,
    webFrontFr,
    webPublicFr,
    crossFr,
    uiuxDe,
    graphicDe,
    thrdDe,
    hwDe,
    etcDe,
    webBk,
    blchBk,
    aiBk,
    dsBk,
    gameBk,
    planBu,
    marketingBu,
    financeBu,
    salesBu,
    consultBu,
    investBu,
    etcBu,
    blogEtc,
    influEtc,
    compEtc,
    uiuxPlanNow,
    gamePlanNow,
    managerPlanNow,
    hwPlanNow,
    iosFrNow,
    androidFrNow,
    webFrontFrNow,
    webPublicFrNow,
    crossFrNow,
    uiuxDeNow,
    graphicDeNow,
    thrdDeNow,
    hwDeNow,
    etcDeNow,
    webBkNow,
    blchBkNow,
    aiBkNow,
    dsBkNow,
    gameBkNow,
    planBuNow,
    marketingBuNow,
    financeBuNow,
    salesBuNow,
    consultBuNow,
    investBuNow,
    etcBuNow,
    blogEtcNow,
    influEtcNow,
    compEtcNow,
    leaderInfo,
    memberID,
    projectSub,
  } = postData;

  const [notice, setNotice] = useState({});

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

  return (
    <Container style={{ marginTop: 80 }}>
      {projectName && (
        <DetailHeader
          projectOnOff={projectOnOff}
          projectName={projectName}
          leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
          leaderName="name"
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
            <Tabs.Tab active={where === 'qna'} onClick={() => setWhere('qna')}>
              질문
            </Tabs.Tab>
            {(memberID && memberID.includes(decodedToken.id)) ||
            (decodedToken && userID === decodedToken.id) ? (
              <Tabs.Tab
                active={where === 'notice'}
                onClick={() => setWhere('notice')}
              >
                공지
              </Tabs.Tab>
            ) : (
              <Tabs.Tab>공지 🔒</Tabs.Tab>
            )}
            {decodedToken && userID === decodedToken.id ? (
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

          {where === 'info' &&
            projectPlatform &&
            content &&
            projectSkill &&
            projectReference && (
              <S.LeftDetail>
                <DetailRecurit
                  uiuxPlan={uiuxPlan}
                  gamePlan={gamePlan}
                  managerPlan={managerPlan}
                  hwPlan={hwPlan}
                  iosFr={iosFr}
                  androidFr={androidFr}
                  webFrontFr={webFrontFr}
                  webPublicFr={webPublicFr}
                  crossFr={crossFr}
                  uiuxDe={uiuxDe}
                  graphicDe={graphicDe}
                  thrdDe={thrdDe}
                  hwDe={hwDe}
                  etcDe={etcDe}
                  webBk={webBk}
                  blchBk={blchBk}
                  aiBk={aiBk}
                  dsBk={dsBk}
                  gameBk={gameBk}
                  planBu={planBu}
                  marketingBu={marketingBu}
                  financeBu={financeBu}
                  salesBu={salesBu}
                  consultBu={consultBu}
                  investBu={investBu}
                  etcBu={etcBu}
                  blogEtc={blogEtc}
                  influEtc={influEtc}
                  compEtc={compEtc}
                  uiuxPlanNow={uiuxPlanNow}
                  gamePlanNow={gamePlanNow}
                  managerPlanNow={managerPlanNow}
                  hwPlanNow={hwPlanNow}
                  iosFrNow={iosFrNow}
                  androidFrNow={androidFrNow}
                  webFrontFrNow={webFrontFrNow}
                  webPublicFrNow={webPublicFrNow}
                  crossFrNow={crossFrNow}
                  uiuxDeNow={uiuxDeNow}
                  graphicDeNow={graphicDeNow}
                  thrdDeNow={thrdDeNow}
                  hwDeNow={hwDeNow}
                  etcDeNow={etcDeNow}
                  webBkNow={webBkNow}
                  blchBkNow={blchBkNow}
                  aiBkNow={aiBkNow}
                  dsBkNow={dsBkNow}
                  gameBkNow={gameBkNow}
                  planBuNow={planBuNow}
                  marketingBuNow={marketingBuNow}
                  financeBuNow={financeBuNow}
                  salesBuNow={salesBuNow}
                  consultBuNow={consultBuNow}
                  investBuNow={investBuNow}
                  etcBuNow={etcBuNow}
                  blogEtcNow={blogEtcNow}
                  influEtcNow={influEtcNow}
                  compEtcNow={compEtcNow}
                  apply={applyService}
                  userID={3}
                  projectID={Number(projectID)}
                />
                <DetailPlatform projectPlatform={projectPlatform} />
                <DetailContent value={content} />
                <DetailSkill projectSkill={projectSkill} />
                <DetailReference projectReference={projectReference} />
              </S.LeftDetail>
            )}
          {where === 'qna' && (
            <S.CommentWrap>
              <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                👍 이 모임에 응원 * 질문을 올려주세요!
              </Heading>
              <DetailCommentInput comment={comment} setComment={setComment} />
              <DetailCommentLog />
              {/* 여기는 석환이랑 db 협의가 끝나면 개발 */}
              <S.MediaBox />
            </S.CommentWrap>
          )}
          {where === 'apply' && (
            <div>
              <S.TalUl>
                <S.TabUpdate
                  onClick={() => navigate(`/project/update/${projectID}`)}
                >
                  수정
                </S.TabUpdate>
                <S.TabUpdate
                  onClick={() => {
                    deleteAxios(projectID);
                  }}
                >
                  삭제
                </S.TabUpdate>
              </S.TalUl>
            </div>
          )}
          {where === 'notice' && (
            <div>
              <div>notice</div>
            </div>
          )}
        </S.PageLeft>
        {projectField &&
          leaderInfo &&
          typeof projectLike === typeof projectView &&
          projectStart &&
          projectEnd && (
            <DetailRightCard
              leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
              leaderName="name"
              leaderInfo={leaderInfo.introduce}
              projectField={projectField}
              projectLike={projectLike}
              projectView={projectView}
              projectStart={projectStart}
              projectEnd={projectEnd}
              projectSub={false}
            />
          )}
      </S.PageWrap>
    </Container>
  );
};
