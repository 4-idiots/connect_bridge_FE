import React, { useState, useCallback } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import './uploadComponent/datepicker.css';
import {
  ProjectType,
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

export const ProjectUploadForm = () => {
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({
    projectMotive: true,
    projectOnOff: '온라인/오프라인 모두 가능',
    projectArea: '상관없음',
    projectStart: new Date('2022/01/02'),
    projectEnd: new Date('2022/01/07'),
    projectPlatform: [],
    projectContent: [
      {
        type: 'paragaph',
        children: [{ text: '프로젝트를 소개 하자면....' }],
      },
    ],
    projectTotal: [{ main: '기획', sub: 'UI/UX 기획', need: 1 }],
    projectImg: '',
  });

  const {
    projectMotive,
    projectName,
    projectField,
    projectImg,
    projectOnOff,
    projectArea,
    projectSkill,
    projectReference,
    projectContent,
    projectStart,
    projectEnd,
    projectPlatform,
    projectTotal,
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

  const uploadAxios = async formdata => {
    try {
      const result = await projectUploadService(formdata);
      alert('등록 되었습니다.');
      navigate('/project');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('userID', 1);
    formData.append('projectName', projectName);
    formData.append('projectMotive', projectMotive);
    formData.append('projectImg', projectImg);
    formData.append('projectContent', JSON.stringify(projectContent));
    formData.append('projectField', projectField);
    formData.append('projectOnOff', projectOnOff);
    formData.append('projectArea', projectArea);
    formData.append('projectTotal', projectTotal);
    formData.append('projectReference', projectReference);
    formData.append('projectPlatform', projectPlatform);
    formData.append('projectSkill', projectSkill);
    formData.append('projectStart', projectStart);
    formData.append('projectEnd', projectEnd);

    uploadAxios(formData);

    console.log(postInfo);
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>모임 수정 하기</Heading>
      <Box style={{ width: '90%', margin: 'auto' }}>
        <ProjectType
          valcheck={projectMotive}
          gettrue={() => {
            setPostInfo({ ...postInfo, projectMotive: true });
          }}
          getfalse={() => {
            setPostInfo({ ...postInfo, projectMotive: false });
          }}
        />
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
            ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해 지원율리
            50% 높습니다.
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
      </Box>
    </Container>
  );
};
