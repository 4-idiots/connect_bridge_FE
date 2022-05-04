import React, { useState, useCallback } from 'react';
import { Button, Form } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import './uploadComponent/datepicker.css';
import { useJwt } from 'react-jwt';
import {
  ProjectRecruit,
  ProjectInput,
  ProjectField,
  ProjectPlatform,
  ProjectArea,
  ProjectImg,
  ProjectDate,
} from './uploadComponent/uploadRoutes';
import { projectUploadService } from '../../service';
import SlateEditor from '../../SlateEditor/Editor';
import { useAuth } from '../../contexts/hooks/useAuth';

export const ProjectUploadForm = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);

  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({
    projectOnOff: '-------',
    projectArea: '-------',
    projectStart: new Date('2022/01/01'),
    projectEnd: new Date('2022/01/07'),
    projectPlatform: [],
    content: [
      {
        type: 'paragaph',
        children: [{ text: '프로젝트를 소개 하자면....' }],
      },
    ],
    projectTotal: [{ main: '-------', sub: '-------' }],
    projectImg: '',
    uiuxPlan: 1,
    gamePlan: 0,
    managerPlan: 0,
    hwPlan: 0,
    iosFr: 0,
    androidFr: 0,
    webFrontFr: 0,
    webPublicFr: 0,
    crossFr: 0,
    uiuxDe: 0,
    graphicDe: 0,
    thrdDe: 0,
    hwDe: 0,
    etcDe: 0,
    webBk: 0,
    blchBk: 0,
    aiBk: 0,
    dsBk: 0,
    gameBk: 0,
    planBu: 0,
    marketingBu: 0,
    financeBu: 0,
    salesBu: 0,
    consultBu: 0,
    investBu: 0,
    etcBu: 0,
    blogEtc: 0,
    influEtc: 0,
    compEtc: 0,
  });

  const {
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

  const uploadAxios = async formData => {
    try {
      const result = await projectUploadService(formData);
      alert('등록 되었습니다.');
      navigate('/project');
    } catch (error) {
      console.log(error);
      alert('다시 시도해주세요');
    }
  };

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('userID', decodedToken.id);
    formData.append('projectName', projectName);
    formData.append('projectImg', projectImg);
    formData.append('content', JSON.stringify(content));
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

    uploadAxios(formData);
  };

  return (
    <>
      <ProjectInput
        label="* 프로젝트명"
        help="! 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다."
        placeholder="3~20글자로 적어주세요 ex)승차거부 신고앱"
        value={projectName || ''}
        name="projectName"
        onChange={onChangeProjectEvent}
      />
      <ProjectField
        checked={projectField}
        onChange={e =>
          setPostInfo({
            ...postInfo,
            projectField: e.currentTarget.name,
          })
        }
      />
      <ProjectImg postInfo={postInfo} setPostInfo={setPostInfo} />
      <ProjectArea onChange={onChangeProjectEvent} />
      <ProjectRecruit member={postInfo} setMember={setPostInfo} />
      <ProjectPlatform checked={postInfo} onChange={setPostInfo} />

      <Form.Field>
        <Form.Label>* 프로젝트 설명</Form.Label>
        <Form.Help>
          ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해 지원율리 50%
          높습니다.
        </Form.Help>
      </Form.Field>
      <SlateEditor value={postInfo} setValue={setPostInfo} />
      <ProjectDate
        start={projectStart}
        end={projectEnd}
        startChange={date => {
          setPostInfo({ ...postInfo, projectStart: date });
        }}
        endChange={date => {
          setPostInfo({ ...postInfo, projectEnd: date });
        }}
      />
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
      <Button.Group align="center">
        <Button color="success" onClick={onSubmitEvent}>
          작성하기
        </Button>
      </Button.Group>
    </>
  );
};
