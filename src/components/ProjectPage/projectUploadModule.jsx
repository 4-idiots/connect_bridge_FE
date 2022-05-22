import React, { useState, useCallback } from 'react';
import { Button, Form } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import './uploadComponent/datepicker.css';
import { useJwt } from 'react-jwt';
import * as UR from './uploadComponent/uploadRoutes';
import { projectUploadService } from '../../services/projectService';
import SlateEditor from '../../SlateEditor/Editor';
import { useAuth } from '../../contexts/hooks/useAuth';
import { uploadFormData } from '../../RefactorFunc/dataControl';

export const ProjectUploadForm = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({
    projectOnline: '-------',
    projectArea: '-------',
    projectStart: new Date(),
    projectEnd: new Date(),
    projectPlatform: [],
    content: [
      {
        type: 'paragaph',
        children: [{ text: '프로젝트를 소개 하자면....' }],
      },
    ],
    projectTotal: [{ main: '-------', sub: '-------', num: 0 }],
    projectImg: '',
    uiuxPlan: 0,
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

  const onChangeProjectEvent = useCallback(
    e => {
      setPostInfo({
        ...postInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [postInfo],
  );

  const onSubmitEvent = () => {
    if (postInfo.projectImg) {
      const formData = new FormData();
      formData.append('userID', decodedToken.id);
      formData.append('projectOnline', postInfo.projectOnline);
      formData.append('projectName', postInfo.projectName);
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

      uploadFormData(formData, projectUploadService, navigate, '/project');
    } else {
      alert('사진을 업로드 해주세요');
    }
  };

  return (
    <>
      <UR.ProjectInput
        label="* 프로젝트명"
        help="! 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다."
        placeholder="3~20글자로 적어주세요 ex)승차거부 신고앱"
        value={postInfo.projectName || ''}
        name="projectName"
        onChange={onChangeProjectEvent}
      />
      <UR.ProjectField
        checked={postInfo.projectField}
        onChange={e =>
          setPostInfo({
            ...postInfo,
            projectField: e.currentTarget.name,
          })
        }
      />
      <UR.ProjectImg postInfo={postInfo} setPostInfo={setPostInfo} />
      <UR.ProjectArea onChange={onChangeProjectEvent} value={postInfo} />
      <UR.ProjectRecruit member={postInfo} setMember={setPostInfo} />
      <UR.ProjectPlatform checked={postInfo} onChange={setPostInfo} />

      <Form.Field>
        <Form.Label>* 프로젝트 설명</Form.Label>
        <Form.Help>
          ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해 지원율리 50%
          높습니다.
        </Form.Help>
      </Form.Field>
      <SlateEditor value={postInfo} setValue={setPostInfo} />
      <UR.ProjectDate
        start={postInfo.projectStart}
        end={postInfo.projectEnd}
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
          작성하기
        </Button>
      </Button.Group>
    </>
  );
};
