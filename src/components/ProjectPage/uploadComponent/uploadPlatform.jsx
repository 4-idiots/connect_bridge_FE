import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { platArray } from './uploadValue';
import { CustomCheckbox } from './uploadCustom';

export const ProjectPlatform = ({ checked, onChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 출시 플랫폼</Form.Label>
      <Form.Help>
        ! 출시 플랫폼은 중복 체크가 가능합니다. (ex: IOS, MAC OS)
      </Form.Help>
      <Form.Control>
        <div
          style={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {platArray.map(item => (
            <CustomCheckbox
              checktype="platform"
              key={item}
              name={item}
              onChange={onChange}
              checked={checked.includes(item)}
            >
              {item}
            </CustomCheckbox>
          ))}
        </div>
      </Form.Control>
    </Form.Field>
  );
};

ProjectPlatform.propTypes = {
  checked: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
