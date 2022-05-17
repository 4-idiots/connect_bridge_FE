import React from 'react';
import { Form, Card } from 'react-bulma-components';
import PropTypes from 'prop-types';
import defPr from '../../../assets/svg/defPr.png';

export const ProjectImg = ({ postInfo, setPostInfo }) => {
  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setPostInfo({
          ...postInfo,
          preview: reader.result,
          projectImg: fileBlob,
        });
        resolve();
      };
    });
  };

  return (
    <Form.Field>
      <Form.Label>* 대표 이미지</Form.Label>
      <Form.Help>! 프로젝트 대표 이미지를 올려주세요.</Form.Help>
      <div style={{ display: 'flex' }}>
        <Card style={{ width: 600, height: 300 }}>
          {postInfo.preview ? (
            <Card.Image src={postInfo.preview} size="2by1" />
          ) : (
            <img
              src=""
              alt="img"
              onError={e => {
                e.target.src = defPr;
              }}
            />
          )}
        </Card>
        <div style={{ marginLeft: '3rem' }}>
          <Form.Control>
            <Form.InputFile
              name="imgSrc"
              onChange={e => encodeFileToBase64(e.target.files[0])}
              accept="img/*"
              label="대표 이미지 올리기"
              color="info"
              boxed
              size="small"
            />
          </Form.Control>
          <Form.Help>
            * 가로/세로의 비율이 2:1일 때 썸네일이 가장 예쁩니다.
          </Form.Help>
          <Form.Help>* 저작권에 위배되지 않는 파일만 업로드해주세요.</Form.Help>
        </div>
      </div>
    </Form.Field>
  );
};

ProjectImg.propTypes = {
  postInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  setPostInfo: PropTypes.func.isRequired,
};
