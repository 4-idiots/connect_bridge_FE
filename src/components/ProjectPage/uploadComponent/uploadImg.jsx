import React from 'react';
import { Form, Card } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const ProjectImg = ({ preview, onChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 대표 이미지</Form.Label>
      <Form.Help>! 프로젝트 대표 이미지를 올려주세요.</Form.Help>
      <div style={{ display: 'flex' }}>
        <Card style={{ width: 600 }}>
          {preview ? (
            <Card.Image src={preview} size="2by1" />
          ) : (
            <Card.Image src="" size="2by1" />
          )}
        </Card>
        <div style={{ marginLeft: '3rem' }}>
          <Form.Control>
            <Form.InputFile
              name="imgSrc"
              onChange={onChange}
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
  preview: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ProjectImg.defaultProps = {
  preview: '',
};
