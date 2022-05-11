import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { platArray } from './uploadValue';
import { CustomCheckbox } from './style';

export const ProjectPlatform = ({ checked, onChange }) => {
  const onChangePlatform = e => {
    if (checked.projectPlatform.includes(e.currentTarget.name)) {
      const list = [...checked.projectPlatform];
      list.splice(checked.projectPlatform.indexOf(e.currentTarget.name), 1);
      onChange({ ...checked, projectPlatform: list });
    } else {
      onChange({
        ...checked,
        projectPlatform: [...checked.projectPlatform, e.currentTarget.name],
      });
    }
  };
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
              onChange={onChangePlatform}
              checked={checked.projectPlatform.includes(item)}
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
  checked: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};
