import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const ProjectInput = ({
  label,
  help,
  placeholder,
  value,
  name,
  onChange,
}) => {
  return (
    <Form.Field>
      <Form.Label>{label}</Form.Label>
      <Form.Help>{help}</Form.Help>
      <Form.Control>
        <Form.Input
          placeholder={placeholder}
          value={value || ''}
          name={name}
          onChange={onChange}
        />
      </Form.Control>
    </Form.Field>
  );
};

ProjectInput.propTypes = {
  label: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
