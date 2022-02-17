import React, { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  Button,
  Box,
  Form,
  Card,
} from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import { oudoorUpdateService } from '../../service';
// import { outdoorGetSomeService } from '../../service';

export const OutdoorUpdateForm = () => {
  const [uploadInfo, setUploadInfo] = useState({});
  const [imgData, setImageData] = useState({});

  const { outdoorID } = useParams();

  const { outActID, outActName, outActLink } = uploadInfo;
  const { imgSrc, preview } = imgData;

  //   useEffect(() => {
  //     outdoorGetSomeService(1)
  //       .then(response => {
  //         setUploadInfo({
  //           ...uploadInfo,
  //           outActID: outdoorID,
  //           outActName: response.data.outActName,
  //           outActLink: response.data.outActName,
  //         });
  //         setImageData({ ...imgSrc, preview: response.data.outActImg });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  useEffect(() => {
    setUploadInfo({
      ...uploadInfo,
      outActID: outdoorID,
      outActName: 'teeest',
      outActLink: 'teest',
    });
    setImageData({
      ...imgData,
      imgSrc: 'qwe',
      preview:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU',
    });
  }, []);

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
    formData.append('outActID', outActID);
    formData.append('outActName', outActName);
    formData.append('outActImg', imgSrc);
    formData.append('outActLink', outActLink);

    oudoorUpdateService(formData)
      .then(response => console.log(response))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>{outActName} 수정하기</Heading>
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
