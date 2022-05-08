import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const MyPageInput = ({
  label,
  value,
  name,
  onChange,
  disabled,
  isPW,
}) => {
  return (
    <Form.Field>
      <Form.Label>{label}</Form.Label>
      <Form.Control>
        <Form.Input
          placeholder={label}
          value={value || ''}
          name={name}
          onChange={onChange}
          disabled={disabled}
          type={isPW ? 'password' : 'text'}
        />
      </Form.Control>
    </Form.Field>
  );
};

MyPageInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isPW: PropTypes.bool,
};

MyPageInput.defaultProps = {
  value: '',
  disabled: false,
  isPW: false,
};
