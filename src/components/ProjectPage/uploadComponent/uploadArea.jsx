import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { areaArray, onOffArray } from './uploadValue';

export const ProjectArea = ({ onChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 지역</Form.Label>
      <Form.Help>! 온/오프라인 여부와 장소를 선택해주세요.</Form.Help>
      <Form.Control>
        <Form.Select
          style={{ width: '20%' }}
          name="projectOnOff"
          onChange={onChange}
        >
          <option value="">-------</option>
          {onOffArray.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          style={{ width: '16%' }}
          name="projectArea"
          onChange={onChange}
        >
          <option value="">-------</option>
          {areaArray.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
};

ProjectArea.propTypes = {
  onChange: PropTypes.func.isRequired,
};
