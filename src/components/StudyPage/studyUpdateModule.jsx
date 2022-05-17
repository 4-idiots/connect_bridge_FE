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
import * as Send from '../../services/studyService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { SkelUpdate } from '../skeleton/project/update';

export const StudyUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const navigate = useNavigate();
  const { studyID } = useParams();
  const [study, setStudy] = useState(null);

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
      await Send.studyUpdateService(
        studyID,
        study.studyImg,
        study.studyName,
        study.studyKeyward,
        study.studyField,
        study.studyArea,
        study.studyMember,
        study.studyEnd,
        study.studyStart,
        JSON.stringify(study.content),
        study.studyOnline,
      );
      alert('수정 되었습니다.');
      navigate('/study');
    } catch (error) {
      navigate('/study');
    }
  };

  useEffect(() => {
    const getSomeAxios = async prID => {
      setLoading(true);
      try {
        const result = await Send.studyGetSomeService(prID);
        setStudy(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getSomeAxios(studyID);
  }, []);

  const onSubmitEvent = () => {
    updateAxios();
  };

  if (study && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        {decodedToken && decodedToken.id === study.userID ? (
          <>
            <Heading style={{ textAlign: 'center' }}>모임 수정 하기</Heading>
            <Box style={{ width: '90%', margin: 'auto' }}>
              <StudyInput
                label="* 스터디/네트워킹 주제"
                help="! 진행하고자 하는 스터디 주제를 제목으로 정해주세요"
                placeholder="웹 개발 같이 공부하실분~"
                value={study.studyName}
                name="studyName"
                onChange={onChangeStudyEvent}
              />
              <StudyInput
                label="* 스터디 분야/키워드"
                help="! 스터디의 키워드를 , 로 끊어주세요"
                placeholder="공부, 온라인"
                value={study.studyKeyward}
                name="studyKeyward"
                onChange={onChangeStudyEvent}
              />
              <StudyField
                field={study.studyField}
                onChange={onChangeStudyEvent}
              />
              <StudyRecruit
                member={study.studyMember}
                onChange={onChangeStudyEvent}
              />
              <StudyArea onChange={onChangeStudyEvent} value={study} />
              <StudyDate
                start={new Date(study.studyStart)}
                end={new Date(study.studyEnd)}
                startChange={date => {
                  setStudy({ ...study, studyStart: date });
                }}
                endChange={date => {
                  setStudy({ ...study, studyEnd: date });
                }}
              />
              {study.content && (
                <>
                  <Form.Field>
                    <Form.Label>* 스터디 설명</Form.Label>
                    <Form.Help>
                      ! 스터디 참여조건에 대해서 기재해주세요
                    </Form.Help>
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
  }
  return <SkelUpdate />;
};
