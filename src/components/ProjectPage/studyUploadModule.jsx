import React, { useState, useCallback } from 'react';
import { Form, Button } from 'react-bulma-components';
import {
  StudyInput,
  StudyArea,
  StudyDate,
  StudyField,
  StudyRecruit,
} from './sUploadComponent/sUploadValue';
import SlateEditor from '../../SlateEditor/Editor';
import { studyUploadService } from '../../services/studyService';

export const StudyUploadForm = () => {
  const [study, setStudy] = useState({
    studyName: '',
    studyKeyward: '',
    studyField: '',
    studyArea: '',
    studyMember: '',
    studyStart: new Date('2022/01/01'),
    studyEnd: new Date('2022/01/07'),
    studyOnline: '',
    content: [
      { type: 'paragaph', children: [{ text: '● 스터디 목표 및 진행방식' }] },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          { text: '[목표] : ( 예: 자바스크립트를 마스터하고자 합니다) ' },
        ],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          {
            text: '[진행방식] : (예: 매주마다 다음주의 목표를 설정하고, 이에 대한 공부 후 실제 프로토타입)',
          },
        ],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          {
            text: '[장소/횟수] : (예: 정기적으로 오프라인 주말 1회 혹은 zoom 1회 토론 등)',
          },
        ],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [{ text: '[기간] : (예 : 3달 정도 진행하고자 합니다)' }],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      { type: 'paragaph', children: [{ text: '' }] },
      { type: 'paragaph', children: [{ text: '● 참여 조건' }] },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          {
            text: '[지식수준] : (예 :해당 언어에 대한 지식이 조금 있으셨으면 합니다. )',
          },
        ],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          { text: '[참여회비] (예 : 매 모임마다 1만원의 회비가 있습니다)' },
        ],
      },
      { type: 'paragaph', children: [{ text: '' }] },
      {
        type: 'paragaph',
        children: [
          { text: '[기타] ( 예: 인천 거주하시는 분이시면 더욱 좋겠습니다)' },
        ],
      },
    ],
  });

  const {
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyMember,
    studyStart,
    studyEnd,
    content,
    studyOnline,
  } = study;

  const randImg = [
    'https://cdn.discordapp.com/attachments/885739536301318169/974946059811979304/pexels-olia-danilevich-5088022.jpg',
    'https://cdn.discordapp.com/attachments/885739536301318169/974946060680175636/pexels-olia-danilevich-5088008.jpg',
    'https://cdn.discordapp.com/attachments/885739536301318169/974946061242208326/pexels-lumn-351961.jpg',
    'https://cdn.discordapp.com/attachments/885739536301318169/974946062106243102/pexels-pixabay-301920.jpg',
  ];

  const onChangeStudyEvent = useCallback(
    e => {
      setStudy({
        ...study,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [study],
  );

  const uploadAxios = async () => {
    try {
      const result = await studyUploadService(
        randImg[Math.floor(Math.random() * randImg.length)],
        studyName,
        studyKeyward,
        studyField,
        studyArea,
        studyMember,
        studyStart,
        studyEnd,
        studyOnline,
        JSON.stringify(content),
      );
      alert('등록 되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitEvent = () => {
    uploadAxios();
  };

  return (
    <>
      <StudyInput
        label="* 스터디/네트워킹 주제"
        help="! 진행하고자 하는 스터디 주제를 제목으로 정해주세요"
        placeholder="웹 개발 같이 공부하실분~"
        value={studyName}
        name="studyName"
        onChange={onChangeStudyEvent}
      />
      <StudyInput
        label="* 스터디 분야/키워드"
        help="! 스터디의 키워드를 , 로 끊어주세요"
        placeholder="공부, 온라인"
        value={studyKeyward}
        name="studyKeyward"
        onChange={onChangeStudyEvent}
      />
      <StudyField field={studyField} onChange={onChangeStudyEvent} />
      <StudyRecruit member={studyMember} onChange={onChangeStudyEvent} />
      <StudyArea onChange={onChangeStudyEvent} />
      <StudyDate
        start={studyStart}
        end={studyEnd}
        startChange={date => {
          setStudy({ ...study, studyStart: date });
        }}
        endChange={date => {
          setStudy({ ...study, studyEnd: date });
        }}
      />
      <Form.Field>
        <Form.Label>* 스터디 설명</Form.Label>
        <Form.Help>! 스터디 참여조건에 대해서 기재해주세요</Form.Help>
      </Form.Field>
      <SlateEditor value={study} setValue={setStudy} />
      <Button.Group align="center">
        <Button color="success" onClick={onSubmitEvent}>
          작성하기
        </Button>
      </Button.Group>
    </>
  );
};
