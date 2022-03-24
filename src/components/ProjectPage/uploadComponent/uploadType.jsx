import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const ProjectType = ({ valcheck, gettrue, getfalse }) => {
  return (
    <Form.Field>
      <Form.Label>* 유형</Form.Label>
      <Form.Control>
        <Form.Radio
          value={valcheck}
          checked={valcheck === true}
          onChange={gettrue}
        >
          사이드(토이) 프로젝트
        </Form.Radio>
        <Form.Radio
          value={valcheck}
          checked={valcheck === false}
          onChange={getfalse}
        >
          IT 스터디 & 네트워킹
        </Form.Radio>
      </Form.Control>
    </Form.Field>
  );
};

ProjectType.propTypes = {
  valcheck: PropTypes.bool,
  gettrue: PropTypes.func.isRequired,
  getfalse: PropTypes.func.isRequired,
};

ProjectType.defaultProps = {
  valcheck: true,
};
