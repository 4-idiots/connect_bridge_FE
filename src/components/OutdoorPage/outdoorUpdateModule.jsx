import React, { useState, useEffect, useCallback } from 'react';
import * as B from 'react-bulma-components';
import { useParams, useNavigate } from 'react-router-dom';
import * as Send from '../../services/outdoorService';
import * as S from './style';
import { updateFormData } from '../../RefactorFunc/dataControl';

export const OutdoorUpdateForm = () => {
  const navigate = useNavigate();
  const [uploadInfo, setUploadInfo] = useState({});
  const [imgData, setImageData] = useState({});
  const { outdoorID } = useParams();

  const onChangeOutdoorEvent = useCallback(
    e => {
      setUploadInfo({
        ...uploadInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [uploadInfo],
  );

  const getAxios = async () => {
    try {
      const result = await Send.outdoorGetSomeService(outdoorID);
      setUploadInfo({
        ...uploadInfo,
        outActID: outdoorID,
        outActName: result.data.outActName,
        outActLink: result.data.outActLink,
      });
      setImageData({ ...imgData, preview: result.data.outActImg });
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    getAxios();
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
    if (imgData.imgSrc) {
      const formData = new FormData();
      formData.append('outActID', uploadInfo.outActID);
      formData.append('outActName', uploadInfo.outActName);
      formData.append('outActImg', imgData.imgSrc);
      formData.append('outActLink', uploadInfo.outActLink);

      updateFormData(formData, '/outdoor', Send.outdoorUpdateService, navigate);
    } else {
      alert('사진도 수정 해주세요');
    }
  };

  return (
    <B.Container>
      <B.Heading style={{ textAlign: 'center' }}>수정하기</B.Heading>
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
