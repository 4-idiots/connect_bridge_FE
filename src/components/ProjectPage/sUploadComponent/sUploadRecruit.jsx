import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const StudyRecruit = ({ member, onChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 모집인원</Form.Label>
      <Form.Help>
        ! 최대 9명까지 모집이 가능하며 , 3~4명을 추천합니다.(나중에 변경/추가가
        가능합니다.)
      </Form.Help>
      <Form.Control>
        <Form.Select
          defaultValue={member}
          name="studyMember"
          onChange={onChange}
        >
          <option value="">-------</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
};

StudyRecruit.propTypes = {
  member: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
