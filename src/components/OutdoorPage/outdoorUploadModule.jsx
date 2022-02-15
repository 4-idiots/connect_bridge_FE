import React, { useState } from 'react';
import {
  Container,
  Heading,
  Button,
  Box,
  Form,
  Card,
} from 'react-bulma-components';
import { outdoorUploadService } from '../../service';

export const OutdoorUploadForm = () => {
  const [uploadInfo, setUploadInfo] = useState({});
  const [imgData, setImageData] = useState({});

  const { outActName, outActLink } = uploadInfo;
  const { imgSrc, preview } = imgData;

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageData({ ...imgData, preview: reader.result, imgSrc: fileBlob });
        resolve();
      };
    });
  };

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('outActName', outActName);
    formData.append('outActImg', imgSrc);
    formData.append('outActLink', outActLink);

    outdoorUploadService(formData)
      .then(response => console.log(response))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>대외 활동 올리기</Heading>
      <Box style={{ width: '90%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>대외 활동 제목</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={outActName || ''}
              name="outActName"
              onChange={e => {
                setUploadInfo({
                  ...uploadInfo,
                  outActName: e.currentTarget.value,
                });
              }}
              placeholder="대외 활동 제목"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>포스터 이미지</Form.Label>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Card style={{ width: 800 }}>
              {preview ? <Card.Image src={preview} /> : <Card.Image src="" />}
            </Card>
          </Box>
          <Form.Control>
            <Form.InputFile
              name="outActImg"
              onChange={e => {
                encodeFileToBase64(e.target.files[0]);
              }}
              accept="img/*"
              label="포스터 올리기"
              align="center"
              color="info"
              filename={outActName}
              boxed
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>관련 링크</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              value={outActLink || ''}
              name="outActLink"
              onChange={e => {
                setUploadInfo({
                  ...uploadInfo,
                  outActLink: e.currentTarget.value,
                });
              }}
              placeholder="관련 링크"
            />
          </Form.Control>
        </Form.Field>
        <Button.Group align="center">
          <Button color="success" onClick={onSubmitEvent}>
            올리기
          </Button>
        </Button.Group>
      </Box>
    </Container>
  );
};
