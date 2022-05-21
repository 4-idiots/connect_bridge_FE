import React, { useState, useCallback } from 'react';
import * as B from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { outdoorUploadService } from '../../services/outdoorService';
import * as S from './style';
import { uploadFormData } from '../../RefactorFunc/dataControl';

export const OutdoorUploadForm = () => {
  const navigate = useNavigate();
  const [uploadInfo, setUploadInfo] = useState({});
  const [imgData, setImageData] = useState({});

  const onChangeOutdoorEvent = useCallback(
    e => {
      setUploadInfo({
        ...uploadInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [uploadInfo],
  );

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
    if (imgData.imgSrc) {
      const formData = new FormData();
      formData.append('outActName', uploadInfo.outActName);
      formData.append('outActImg', imgData.imgSrc);
      formData.append('outActLink', uploadInfo.outActLink);

      uploadFormData(formData, outdoorUploadService, navigate, '/outdoor');
    } else {
      alert('사진을 업로드 해주세요');
    }
  };

  return (
    <B.Container>
      <B.Heading style={{ textAlign: 'center' }}>대외 활동 올리기</B.Heading>
      <B.Box style={{ width: '90%', margin: 'auto' }}>
        <B.Form.Field>
          <B.Form.Label>대외 활동 제목</B.Form.Label>
          <B.Form.Control>
            <B.Form.Input
              type="text"
              value={uploadInfo.outActName || ''}
              name="outActName"
              onChange={onChangeOutdoorEvent}
              placeholder="대외 활동 제목"
            />
          </B.Form.Control>
        </B.Form.Field>
        <B.Form.Field>
          <B.Form.Label>포스터 이미지</B.Form.Label>
          <S.OdUploadBox>
            <B.Card style={{ width: 800 }}>
              {imgData.preview ? (
                <B.Card.Image src={imgData.preview} />
              ) : (
                <B.Card.Image src="" />
              )}
            </B.Card>
          </S.OdUploadBox>
          <B.Form.Control>
            <B.Form.InputFile
              name="outActImg"
              onChange={e => {
                encodeFileToBase64(e.target.files[0]);
              }}
              accept="img/*"
              label="포스터 올리기"
              align="center"
              color="info"
              filename={uploadInfo.outActName}
              boxed
            />
          </B.Form.Control>
        </B.Form.Field>
        <B.Form.Field>
          <B.Form.Label>관련 링크</B.Form.Label>
          <B.Form.Control>
            <B.Form.Input
              type="text"
              value={uploadInfo.outActLink || ''}
              name="outActLink"
              onChange={onChangeOutdoorEvent}
              placeholder="관련 링크"
            />
          </B.Form.Control>
        </B.Form.Field>
        <B.Button.Group align="center">
          <B.Button color="success" onClick={onSubmitEvent}>
            올리기
          </B.Button>
        </B.Button.Group>
      </B.Box>
    </B.Container>
  );
};
