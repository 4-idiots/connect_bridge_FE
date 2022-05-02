import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bulma-components';
import * as S from './style';

export const DetailCommentInput = ({ comment, setComment }) => {
  return (
    <S.CustomFormWrap>
      <Form.Field>
        <Form.Textarea
          placeholder="이 모임에 응원 * 질문을 올려주세요!"
          size="medium"
          value={comment}
          onChange={e => setComment(e.currentTarget.value)}
          style={{
            marginBottom: '20px',
          }}
        />
      </Form.Field>
    </S.CustomFormWrap>
  );
};

DetailCommentInput.propTypes = {
  comment: PropTypes.string.isRequired,
  setComment: PropTypes.func.isRequired,
};
