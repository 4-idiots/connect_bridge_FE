import React, { useState, useCallback, useEffect } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate, useParams } from 'react-router-dom';
import './uploadComponent/datepicker.css';
import { useJwt } from 'react-jwt';
import * as UR from './uploadComponent/uploadRoutes';
import * as Send from '../../services/projectService';
import SlateEditor from '../../SlateEditor/Editor';
import { useAuth } from '../../contexts/hooks/useAuth';
import { SkelUpdate } from '../skeleton/project/update';
import { getDetailData, updateFormData } from '../../RefactorFunc/dataControl';

export const ProjectUpdateForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postInfo, setPostInfo] = useState(null);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const { projectID } = useParams();

  const onChangeProjectEvent = useCallback(
    e => {
      setPostInfo({
        ...postInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [postInfo],
  );

  useEffect(() => {
    let mounted = true;
    getDetailData(
      setLoading,
      setPostInfo,
      Send.projectGetSomeService,
      projectID,
      mounted,
    );
    return () => {
      mounted = false;
    };
  }, []);

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('userID', decodedToken.id);
    formData.append('projectOnOff', true);
    formData.append('projectOnline', postInfo.projectOnline);
    formData.append('projectID', projectID);
    formData.append('projectName', postInfo.projectName);
    formData.append('projectMotive', postInfo.projectMotive);
    formData.append('projectImg', postInfo.projectImg);
    formData.append('content', JSON.stringify(postInfo.content));
    formData.append('projectField', postInfo.projectField);
    formData.append('projectArea', postInfo.projectArea);
    formData.append('projectTotal', JSON.stringify(postInfo.projectTotal));
    formData.append('projectReference', postInfo.projectReference);
    formData.append('projectPlatform', postInfo.projectPlatform);
    formData.append('projectSkill', postInfo.projectSkill);
    formData.append('projectStart', postInfo.projectStart);
    formData.append('projectEnd', postInfo.projectEnd);
    formData.append('uiuxPlan', postInfo.uiuxPlan);
    formData.append('gamePlan', postInfo.gamePlan);
    formData.append('managerPlan', postInfo.managerPlan);
    formData.append('hwPlan', postInfo.hwPlan);
    formData.append('iosFr', postInfo.iosFr);
    formData.append('androidFr', postInfo.androidFr);
    formData.append('webFrontFr', postInfo.webFrontFr);
    formData.append('webPublicFr', postInfo.webPublicFr);
    formData.append('crossFr', postInfo.crossFr);
    formData.append('uiuxDe', postInfo.uiuxDe);
    formData.append('graphicDe', postInfo.graphicDe);
    formData.append('thrdDe', postInfo.thrdDe);
    formData.append('hwDe', postInfo.hwDe);
    formData.append('etcDe', postInfo.etcDe);
    formData.append('webBk', postInfo.webBk);
    formData.append('blchBk', postInfo.blchBk);
    formData.append('aiBk', postInfo.aiBk);
    formData.append('dsBk', postInfo.dsBk);
    formData.append('gameBk', postInfo.gameBk);
    formData.append('planBu', postInfo.planBu);
    formData.append('marketingBu', postInfo.marketingBu);
    formData.append('financeBu', postInfo.financeBu);
    formData.append('salesBu', postInfo.salesBu);
    formData.append('consultBu', postInfo.consultBu);
    formData.append('investBu', postInfo.investBu);
    formData.append('etcBu', postInfo.etcBu);
    formData.append('blogEtc', postInfo.blogEtc);
    formData.append('influEtc', postInfo.influEtc);
    formData.append('compEtc', postInfo.compEtc);
    formData.append('uiuxPlanNow', postInfo.uiuxPlanNow);
    formData.append('gamePlanNow', postInfo.gamePlanNow);
    formData.append('managerPlanNow', postInfo.managerPlanNow);
    formData.append('hwPlanNow', postInfo.hwPlanNow);
    formData.append('iosFrNow', postInfo.iosFrNow);
    formData.append('androidFrNow', postInfo.androidFrNow);
    formData.append('webFrontFrNow', postInfo.webFrontFrNow);
    formData.append('webPublicFrNow', postInfo.webPublicFrNow);
    formData.append('crossFrNow', postInfo.crossFrNow);
    formData.append('uiuxDeNow', postInfo.uiuxDeNow);
    formData.append('graphicDeNow', postInfo.graphicDeNow);
    formData.append('thrdDeNow', postInfo.thrdDeNow);
    formData.append('hwDeNow', postInfo.hwDeNow);
    formData.append('etcDeNow', postInfo.etcDeNow);
    formData.append('webBkNow', postInfo.webBkNow);
    formData.append('blchBkNow', postInfo.blchBkNow);
    formData.append('aiBkNow', postInfo.aiBkNow);
    formData.append('dsBkNow', postInfo.dsBkNow);
    formData.append('gameBkNow', postInfo.gameBkNow);
    formData.append('planBuNow', postInfo.planBuNow);
    formData.append('marketingBuNow', postInfo.marketingBuNow);
    formData.append('financeBuNow', postInfo.financeBuNow);
    formData.append('salesBuNow', postInfo.salesBuNow);
    formData.append('consultBuNow', postInfo.consultBuNow);
    formData.append('investBuNow', postInfo.investBuNow);
    formData.append('etcBuNow', postInfo.etcBuNow);
    formData.append('blogEtcNow', postInfo.blogEtcNow);
    formData.append('influEtcNow', postInfo.influEtcNow);
    formData.append('compEtcNow', postInfo.compEtcNow);

    updateFormData(formData, '/project', Send.proejctUpdateService, navigate);
  };

  if (postInfo && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        {decodedToken && decodedToken.id === postInfo.userID ? (
          <>
            <Heading style={{ textAlign: 'center' }}>모임 수정 하기</Heading>
            <Box style={{ width: '90%', margin: 'auto' }}>
              {postInfo.projectName && (
                <UR.ProjectInput
                  label="* 프로젝트명"
                  help="! 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다."
                  placeholder="3~20글자로 적어주세요 ex)승차거부 신고앱"
                  value={postInfo.projectName}
                  name="projectName"
                  onChange={onChangeProjectEvent}
                />
              )}
              <UR.ProjectField
                checked={postInfo.projectField}
                onChange={e =>
                  setPostInfo({
                    ...postInfo,
                    projectField: e.currentTarget.name,
                  })
                }
              />
              <UR.UpdateImg
                postInfo={postInfo}
                setPostInfo={setPostInfo}
                nowImg={postInfo.projectImg.toString()}
              />
              <UR.ProjectArea
                onChange={onChangeProjectEvent}
                value={postInfo}
              />
              <UR.ProjectRecruit member={postInfo} setMember={setPostInfo} />
              <UR.ProjectPlatform checked={postInfo} onChange={setPostInfo} />
              <Form.Field>
                <Form.Label>* 프로젝트 설명</Form.Label>
                <Form.Help>
                  ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해
                  지원율리 50% 높습니다.
                </Form.Help>
              </Form.Field>
              {postInfo.content && (
                <SlateEditor value={postInfo} setValue={setPostInfo} />
              )}
              <UR.ProjectDate
                start={new Date(postInfo.projectStart)}
                end={new Date(postInfo.projectEnd)}
                startChange={date => {
                  setPostInfo({ ...postInfo, projectStart: date });
                }}
                endChange={date => {
                  setPostInfo({ ...postInfo, projectEnd: date });
                }}
              />
              <UR.ProjectInput
                label="* 기술/언어 (최대 10개)"
                help="! 프로젝트에 적용된/적용하고자 하는 기술/디자인 플랫폼을 적어주세요."
                placeholder="ex) java, react, figma, photoshop"
                value={postInfo.projectSkill}
                name="projectSkill"
                onChange={onChangeProjectEvent}
              />
              <UR.ProjectInput
                label="* 참고자료"
                help="! 벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를 등록해주세요."
                placeholder="https://4idiot.com"
                value={postInfo.projectReference}
                name="projectReference"
                onChange={onChangeProjectEvent}
              />
              <Button.Group align="center">
                <Button color="success" onClick={onSubmitEvent}>
                  수정하기
                </Button>
              </Button.Group>
            </Box>
          </>
        ) : (
          <Heading style={{ textAlign: 'center' }}>권한이 없습니다.</Heading>
        )}
      </Container>
    );
  }
  return <SkelUpdate />;
};
