import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import Cascader from 'rc-cascader';
import {
  onOffArray,
  areaArray,
  timeArray,
  mainArray,
  skillArray,
  proficiency,
} from './selectValue';

export const MyPageSelect = ({
  type,
  onChange,
  main,
  mSkill,
  mPro,
  sub,
  sSkill,
  sPro,
  onOff,
  area,
  time,
}) => {
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
      <Form.Label>{type}</Form.Label>
      {type === '본 캐릭터 직무/능력치' && (
        <Form.Control>
          <Form.Select style={{ width: '14%' }} name="main" defaultValue={main}>
            {genOption(mainArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="mSkill"
            defaultValue={mSkill}
          >
            <option value="op1">op1</option>
          </Form.Select>
          <Form.Select style={{ width: '14%' }} name="mPro" defaultValue={mPro}>
            {genOption(skillArray)}
          </Form.Select>
        </Form.Control>
      )}
      {type === '부 캐릭터 직무/능력치' && (
        <Form.Control>
          <Form.Select style={{ width: '14%' }} name="sub" defaultValue={sub}>
            {genOption(mainArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="sSkill"
            defaultValue={sSkill}
          >
            <option value="op1">op1</option>
          </Form.Select>
          <Form.Select style={{ width: '14%' }} name="sPro" defaultValue={sPro}>
            {genOption(skillArray)}
          </Form.Select>
        </Form.Control>
      )}
      {type === '지역 및 시간 설정' && (
        <Form.Control>
          <Form.Select
            style={{ width: '20%' }}
            name="onOff"
            onChange={onChange}
            defaultValue={onOff}
          >
            {genOption(onOffArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="area"
            onChange={onChange}
            defaultValue={area}
          >
            {genOption(areaArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="time"
            onChange={onChange}
            defaultValue={time}
          >
            {genOption(timeArray)}
          </Form.Select>
        </Form.Control>
      )}
    </Form.Field>
  );
};

MyPageSelect.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  main: PropTypes.string,
  mSkill: PropTypes.string,
  mPro: PropTypes.string,
  sub: PropTypes.string,
  sSkill: PropTypes.string,
  sPro: PropTypes.string,
  onOff: PropTypes.string,
  area: PropTypes.string,
  time: PropTypes.string,
};

MyPageSelect.defaultProps = {
  main: '',
  mSkill: '',
  mPro: '',
  sub: '',
  sSkill: '',
  sPro: '',
  onOff: '',
  area: '',
  time: '',
};
