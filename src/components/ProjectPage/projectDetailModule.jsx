import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading } from 'react-bulma-components';
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
import { projectGetSomeService, projectApplyService } from '../../service';

export const ProjectDetailForm = () => {
  const { projectID } = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getAxios = async id => {
      try {
        const result = await projectGetSomeService(id);
        setPostData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAxios(projectID);
  }, []);

  const {
    projectMotive,
    projectTotal,
    projectImg,
    projectArea,
    projectOnOff,
    projectName,
    projectField,
    projectSkill,
    projectReference,
    projectContent,
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
    salseBu,
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
    salseBuNow,
    consultBuNow,
    investBuNow,
    etcBuNow,
    blogEtcNow,
    influEtcNow,
    compEtcNow,
  } = postData;

  const [isInfo, setIsInfo] = useState(true);
  const [comment, setComment] = useState('');

  const applyService = async (prid, uid, field) => {
    try {
      const result = await projectApplyService(prid, uid, field);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {projectOnOff && projectName && projectMotive && (
        <DetailHeader
          projectOnOff={projectOnOff}
          projectName={projectName}
          projectMotive={projectMotive}
          leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
          leaderName="name"
        />
      )}
      <S.PageWrap>
        <S.PageLeft>
          <S.LeftTab>
            <S.TalUl>
              <S.TabLi onClick={() => setIsInfo(true)}>정보</S.TabLi>
              <S.TabLi onClick={() => setIsInfo(false)}>질문</S.TabLi>
            </S.TalUl>
          </S.LeftTab>
          {isInfo &&
            projectPlatform &&
            projectContent &&
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
                  salseBu={salseBu}
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
                  salseBuNow={salseBuNow}
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
                <DetailContent value={projectContent} />
                <DetailSkill projectSkill={projectSkill} />
                <DetailReference projectReference={projectReference} />
              </S.LeftDetail>
            )}
          {!isInfo && (
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
        </S.PageLeft>
        {projectField &&
          typeof projectLike === typeof projectView &&
          projectStart &&
          projectEnd && (
            <DetailRightCard
              leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
              leaderName="name"
              leaderInfo="asdasdsa"
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
