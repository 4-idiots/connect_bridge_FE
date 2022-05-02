/* eslint-disable valid-typeof */
import React, { useState, useCallback, useEffect } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate, useParams } from 'react-router-dom';
import './uploadComponent/datepicker.css';
import { useJwt } from 'react-jwt';
import {
  ProjectRecruit,
  ProjectInput,
  ProjectField,
  ProjectPlatform,
  ProjectArea,
  UpdateImg,
  ProjectDate,
} from './uploadComponent/uploadRoutes';
import { projectGetSomeService, proejctUpdateService } from '../../service';
import SlateEditor from '../../SlateEditor/Editor';
import { useAuth } from '../../contexts/hooks/useAuth';

export const ProjectUpdateForm = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({});
  const { projectID } = useParams();

  const {
    projectMotive,
    projectName,
    projectField,
    projectImg,
    projectArea,
    projectSkill,
    projectReference,
    content,
    projectStart,
    projectEnd,
    projectPlatform,
    projectTotal,
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
    projectOnOff,
    userID,
  } = postInfo;

  const onChangeProjectEvent = useCallback(
    e => {
      setPostInfo({
        ...postInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [postInfo],
  );

  const updateAxios = async formdata => {
    try {
      const result = await proejctUpdateService(formdata);
      alert('수정 되었습니다.');
      navigate('/project');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  const getSomeAxios = async prID => {
    try {
      const result = await projectGetSomeService(prID);
      setPostInfo(result.data);
    } catch (error) {
      navigate('/project');
    }
  };

  useEffect(() => {
    getSomeAxios(projectID);
  }, []);

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('userID', decodedToken.id);
    formData.append('projectOnOff', true); // 이거 바꾸는 버튼 만들어야 함
    formData.append('projectID', projectID);
    formData.append('projectName', projectName);
    formData.append('projectMotive', projectMotive);
    formData.append('projectImg', projectImg);
    formData.append('projectContent', JSON.stringify(content));
    formData.append('projectField', projectField);
    formData.append('projectArea', projectArea);
    formData.append('projectTotal', JSON.stringify(projectTotal));
    formData.append('projectReference', projectReference);
    formData.append('projectPlatform', projectPlatform);
    formData.append('projectSkill', projectSkill);
    formData.append('projectStart', projectStart);
    formData.append('projectEnd', projectEnd);
    formData.append('uiuxPlan', uiuxPlan);
    formData.append('gamePlan', gamePlan);
    formData.append('managerPlan', managerPlan);
    formData.append('hwPlan', hwPlan);
    formData.append('iosFr', iosFr);
    formData.append('androidFr', androidFr);
    formData.append('webFrontFr', webFrontFr);
    formData.append('webPublicFr', webPublicFr);
    formData.append('crossFr', crossFr);
    formData.append('uiuxDe', uiuxDe);
    formData.append('graphicDe', graphicDe);
    formData.append('thrdDe', thrdDe);
    formData.append('hwDe', hwDe);
    formData.append('etcDe', etcDe);
    formData.append('webBk', webBk);
    formData.append('blchBk', blchBk);
    formData.append('aiBk', aiBk);
    formData.append('dsBk', dsBk);
    formData.append('gameBk', gameBk);
    formData.append('planBu', planBu);
    formData.append('marketingBu', marketingBu);
    formData.append('financeBu', financeBu);
    formData.append('salesBu', salesBu);
    formData.append('consultBu', consultBu);
    formData.append('investBu', investBu);
    formData.append('etcBu', etcBu);
    formData.append('blogEtc', blogEtc);
    formData.append('influEtc', influEtc);
    formData.append('compEtc', compEtc);
    formData.append('uiuxPlanNow', uiuxPlanNow);
    formData.append('gamePlanNow', gamePlanNow);
    formData.append('managerPlanNow', managerPlanNow);
    formData.append('hwPlanNow', hwPlanNow);
    formData.append('iosFrNow', iosFrNow);
    formData.append('androidFrNow', androidFrNow);
    formData.append('webFrontFrNow', webFrontFrNow);
    formData.append('webPublicFrNow', webPublicFrNow);
    formData.append('crossFrNow', crossFrNow);
    formData.append('uiuxDeNow', uiuxDeNow);
    formData.append('graphicDeNow', graphicDeNow);
    formData.append('thrdDeNow', thrdDeNow);
    formData.append('hwDeNow', hwDeNow);
    formData.append('etcDeNow', etcDeNow);
    formData.append('webBkNow', webBkNow);
    formData.append('blchBkNow', blchBkNow);
    formData.append('aiBkNow', aiBkNow);
    formData.append('dsBkNow', dsBkNow);
    formData.append('gameBkNow', gameBkNow);
    formData.append('planBuNow', planBuNow);
    formData.append('marketingBuNow', marketingBuNow);
    formData.append('financeBuNow', financeBuNow);
    formData.append('salesBuNow', salesBuNow);
    formData.append('consultBuNow', consultBuNow);
    formData.append('investBuNow', investBuNow);
    formData.append('etcBuNow', etcBuNow);
    formData.append('blogEtcNow', blogEtcNow);
    formData.append('influEtcNow', influEtcNow);
    formData.append('compEtcNow', compEtcNow);

    updateAxios(formData);
  };

  return (
    <Container style={{ marginTop: 80 }}>
      {decodedToken && decodedToken.id === userID ? (
        <>
          <Heading style={{ textAlign: 'center' }}>모임 수정 하기</Heading>
          <Box style={{ width: '90%', margin: 'auto' }}>
            {projectName && (
              <ProjectInput
                label="* 프로젝트명"
                help="! 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다."
                placeholder="3~20글자로 적어주세요 ex)승차거부 신고앱"
                value={projectName || ''}
                name="projectName"
                onChange={onChangeProjectEvent}
              />
            )}
            {projectField && (
              <ProjectField
                checked={projectField}
                onChange={e =>
                  setPostInfo({
                    ...postInfo,
                    projectField: e.currentTarget.name,
                  })
                }
              />
            )}
            {projectImg && (
              <UpdateImg
                postInfo={postInfo}
                setPostInfo={setPostInfo}
                nowImg={projectImg.toString()}
              />
            )}
            {projectArea && <ProjectArea onChange={onChangeProjectEvent} />}
            {typeof uiuxPlan === typeof gamePlan &&
              typeof managerPlan === typeof hwPlan &&
              typeof iosFr === typeof androidFr &&
              typeof webFrontFr === typeof webPublicFr &&
              typeof crossFr === typeof uiuxDe &&
              typeof graphicDe === typeof thrdDe &&
              typeof hwDe === typeof etcDe &&
              typeof webBk === typeof blchBk &&
              typeof aiBk === typeof dsBk &&
              typeof gameBk === typeof planBu &&
              typeof marketingBu === typeof financeBu &&
              typeof salesBu === typeof consultBu &&
              typeof investBu === typeof etcBu &&
              typeof blogEtc === typeof influEtc &&
              compEtc === 0 && (
                <ProjectRecruit member={postInfo} setMember={setPostInfo} />
              )}
            {projectPlatform && (
              <ProjectPlatform checked={postInfo} onChange={setPostInfo} />
            )}

            <Form.Field>
              <Form.Label>* 프로젝트 설명</Form.Label>
              <Form.Help>
                ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해
                지원율리 50% 높습니다.
              </Form.Help>
            </Form.Field>
            {content && <SlateEditor value={postInfo} setValue={setPostInfo} />}
            {projectStart && projectEnd && (
              <ProjectDate
                start={new Date(projectStart)}
                end={new Date(projectEnd)}
                startChange={date => {
                  setPostInfo({ ...postInfo, projectStart: date });
                }}
                endChange={date => {
                  setPostInfo({ ...postInfo, projectEnd: date });
                }}
              />
            )}
            {projectSkill && projectReference && (
              <>
                <ProjectInput
                  label="* 기술/언어 (최대 10개)"
                  help="! 프로젝트에 적용된/적용하고자 하는 기술/디자인 플랫폼을 적어주세요."
                  placeholder="ex) java, react, figma, photoshop"
                  value={projectSkill}
                  name="projectSkill"
                  onChange={onChangeProjectEvent}
                />
                <ProjectInput
                  label="* 참고자료"
                  help="! 벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를 등록해주세요."
                  placeholder="https://4idiot.com"
                  value={projectReference}
                  name="projectReference"
                  onChange={onChangeProjectEvent}
                />
              </>
            )}
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
};
