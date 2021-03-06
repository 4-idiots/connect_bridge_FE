import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bulma-components';
import { projectNoticeUploadService } from '../../../services/projectService';
import * as S from './style';

export const NoticeUpload = ({ projectID }) => {
  const [content, setContent] = useState('');

  const submit = async () => {
    try {
      await projectNoticeUploadService(projectID, content);
      alert('글이 등록 되었습니다.');
      window.location.replace(`/project/${projectID}`);
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  return (
    <S.NoticeUploadWrap>
      <Form.Field>
        <Form.Control>
          <Form.Input
            style={{ height: '100px', width: '600px' }}
            placeholder="공지를 작성해주세요 (최대 500자)"
            type="text"
            onChange={e => setContent(e.currentTarget.value)}
          />
        </Form.Control>
      </Form.Field>
      <Button style={{ marginLeft: 20 }} onClick={submit} color="success">
        작성
      </Button>
    </S.NoticeUploadWrap>
  );
};

NoticeUpload.propTypes = {
  projectID: PropTypes.string.isRequired,
};
