import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { mainArray } from '../uploadComponent/uploadValue';

export const StudyField = ({ field, onChange }) => {
  const genOption = arrayTitle => {
    return (
      <>
        {arrayTitle.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  };
  return (
    <Form.Field>
      <Form.Control>
        <Form.Select defaultValue={field} onChange={onChange} name="studyField">
          <option value="">-------</option>
          {genOption(mainArray)}
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
};

StudyField.propTypes = {
  field: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
