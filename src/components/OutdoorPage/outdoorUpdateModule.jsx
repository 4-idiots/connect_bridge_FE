import React, { useState, useEffect, useCallback } from 'react';
import * as B from 'react-bulma-components';
import { useParams, useNavigate } from 'react-router-dom';
import * as Send from '../../services/outdoorService';
import * as S from './style';

export const OutdoorUpdateForm = () => {
  const navigate = useNavigate();
  const [uploadInfo, setUploadInfo] = useState({});
  const [imgData, setImageData] = useState({});

  const { outdoorID } = useParams();

  const { outActID, outActName, outActLink } = uploadInfo;
  const { imgSrc, preview } = imgData;

  const onChangeOutdoorEvent = useCallback(
    e => {
      setUploadInfo({
        ...uploadInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [uploadInfo],
  );

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await Send.outdoorGetSomeService(outdoorID);
        setUploadInfo({
          ...uploadInfo,
          outActID: outdoorID,
          outActName: result.data.outActName,
          outActLink: result.data.outActLink,
        });
        setImageData({ ...imgSrc, preview: result.data.outActImg });
      } catch (error) {
        alert('다시 시도해주세요');
      }
    };
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

  const updateAxios = async formdata => {
    try {
      const result = await Send.outdoorUpdateService(formdata);
      alert('수정이 완료되었습니다.');
      navigate('/outdoor');
    } catch (error) {
      alert('다시 시도해주세요');
      navigate('/outdoor');
    }
  };

  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append('outActID', outActID);
    formData.append('outActName', outActName);
    formData.append('outActImg', imgSrc);
    formData.append('outActLink', outActLink);

    updateAxios(formData);
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
              value={outActName || ''}
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
              {preview ? (
                <B.Card.Image src={preview} />
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
              filename={outActName}
              boxed
            />
          </B.Form.Control>
        </B.Form.Field>
        <B.Form.Field>
          <B.Form.Label>관련 링크</B.Form.Label>
          <B.Form.Control>
            <B.Form.Input
              type="text"
              value={outActLink || ''}
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
