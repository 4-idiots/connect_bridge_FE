import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { CustomCheckbox } from './uploadCustom';
import { checekArray } from './uploadValue';

export const ProjectField = ({ checked, onChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 프로젝트 분야</Form.Label>
      <Form.Help>! 아래 분야 중에 한가지를 선택해주세요.</Form.Help>
      <Form.Control>
        <div
          style={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {checekArray.map(item => (
            <CustomCheckbox
              checktype="field"
              key={item}
              name={item}
              checked={checked === item}
              onChange={onChange}
            >
              {item}
            </CustomCheckbox>
          ))}
        </div>
      </Form.Control>
    </Form.Field>
  );
};

ProjectField.propTypes = {
  checked: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ProjectField.defaultProps = {
  checked: '',
};
