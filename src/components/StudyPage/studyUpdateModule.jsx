/* eslint-disable valid-typeof */
import React, { useState, useCallback, useEffect } from 'react';
import { Container, Heading, Button, Box, Form } from 'react-bulma-components';
import { useNavigate, useParams } from 'react-router-dom';
import '../ProjectPage/uploadComponent/datepicker.css';
import { useJwt } from 'react-jwt';
import {
  StudyInput,
  StudyArea,
  StudyDate,
  StudyField,
  StudyRecruit,
} from '../ProjectPage/sUploadComponent/sUploadValue';
import SlateEditor from '../../SlateEditor/Editor';
import { studyUpdateService, studyGetSomeService } from '../../service';
import { useAuth } from '../../contexts/hooks/useAuth';

export const StudyUpdateForm = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const navigate = useNavigate();
  const { studyID } = useParams();
  const [study, setStudy] = useState({});

  const {
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyOnOff,
    studyMember,
    studyMemberNow,
    studyEnd,
    studyStart,
    content,
    userID,
  } = study;

  const onChangeStudyEvent = useCallback(
    e => {
      setStudy({
        ...study,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [study],
  );

  const updateAxios = async () => {
    try {
      const result = await studyUpdateService(
        studyID,
        studyName,
        studyKeyward,
        studyField,
        studyArea,
        studyOnOff,
        studyMember,
        studyEnd,
        studyStart,
        JSON.stringify(content),
      );
      alert('수정 되었습니다.');
      navigate('/study');
    } catch (error) {
      navigate('/study');
    }
  };

  const getSomeAxios = async prID => {
    try {
      const result = await studyGetSomeService(prID);
      setStudy(result.data);
    } catch (error) {
      navigate('/study');
    }
  };

  useEffect(() => {
    getSomeAxios(studyID);
  }, []);

  const onSubmitEvent = () => {
    console.log(study);
    // updateAxios();
  };

  return (
    <Container style={{ marginTop: 80 }}>
      {decodedToken && decodedToken.id === userID ? (
        <>
          <Heading style={{ textAlign: 'center' }}>모임 수정 하기</Heading>
          <Box style={{ width: '90%', margin: 'auto' }}>
            {studyName && (
              <StudyInput
                label="* 스터디/네트워킹 주제"
                help="! 진행하고자 하는 스터디 주제를 제목으로 정해주세요"
                placeholder="웹 개발 같이 공부하실분~"
                value={studyName || ''}
                name="studyName"
                onChange={onChangeStudyEvent}
              />
            )}
            {studyKeyward && (
              <StudyInput
                label="* 스터디 분야/키워드"
                help="! 스터디의 키워드를 , 로 끊어주세요"
                placeholder="공부, 온라인"
                value={studyKeyward || ''}
                name="studyKeyward"
                onChange={onChangeStudyEvent}
              />
            )}
            {studyField && (
              <StudyField field={studyField} onChange={onChangeStudyEvent} />
            )}
            {typeof studyMember === typeof studyMemberNow && (
              <StudyRecruit
                member={studyMember}
                onChange={onChangeStudyEvent}
              />
            )}
            {studyArea && <StudyArea onChange={onChangeStudyEvent} />}
            {studyStart && studyEnd && (
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
            )}
            {content && (
              <>
                <Form.Field>
                  <Form.Label>* 스터디 설명</Form.Label>
                  <Form.Help>! 스터디 참여조건에 대해서 기재해주세요</Form.Help>
                </Form.Field>
                <SlateEditor value={study} setValue={setStudy} />
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
