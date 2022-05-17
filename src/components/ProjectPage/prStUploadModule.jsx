import React, { useState } from 'react';
import { Form, Container, Heading, Box } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { ProjectUploadForm } from './projectUploadModule';
import { StudyUploadForm } from './studyUploadModule';
import { useAuth } from '../../contexts/hooks/useAuth';

export const ProjectStudyUploadForm = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [motive, setMotive] = useState(true);

  return (
    <Container style={{ marginTop: 80 }}>
      {decodedToken ? (
        <>
          <Heading style={{ textAlign: 'center' }}>모임 생성 하기</Heading>
          <Box style={{ width: '90%', margin: 'auto' }}>
            <Form.Field>
              <Form.Label>* 유형</Form.Label>
              <Form.Control>
                <Form.Radio
                  value={motive}
                  checked={motive === true}
                  onChange={() => setMotive(true)}
                >
                  사이드(토이) 프로젝트
                </Form.Radio>
                <Form.Radio
                  value={motive}
                  checked={motive === false}
                  onChange={() => setMotive(false)}
                >
                  IT 스터디 & 네트워킹
                </Form.Radio>
              </Form.Control>
            </Form.Field>
            {motive ? <ProjectUploadForm /> : <StudyUploadForm />}
          </Box>
        </>
      ) : (
        <Heading style={{ textAlign: 'center', marginTop: 80 }}>
          권한이 없습니다.
        </Heading>
      )}
    </Container>
  );
};
