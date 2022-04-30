import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import {
  onOffArray,
  areaArray,
  timeArray,
  mainArray,
  skillArray,
  planArray,
  frontArray,
  designArray,
  backArray,
  coopArray,
  etcArray,
} from './selectValue';

export const MyPageSelect = ({ type, onChange, user }) => {
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

  const onChangeInput = e => {
    onChange({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <Form.Field>
      <Form.Label>{type}</Form.Label>
      {type === '본 캐릭터 직무/능력치' && (
        <Form.Control>
          <Form.Select
            style={{ width: '14%' }}
            name="main"
            onChange={e => onChange({ ...user, main: e.currentTarget.value })}
            defaultValue={user.main}
          >
            <option value="">-------</option>
            {genOption(mainArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="mSkill"
            onChange={e => onChange({ ...user, mSkill: e.currentTarget.value })}
            defaultValue={user.mSkill}
          >
            <option value="">-------</option>
            {user.main === '기획' && <>{genOption(planArray)}</>}
            {user.main === '디자인' && <>{genOption(designArray)}</>}
            {user.main === '프론트엔드개발' && <>{genOption(frontArray)}</>}
            {user.main === '백엔드개발' && <>{genOption(backArray)}</>}
            {user.main === '사업' && <>{genOption(coopArray)}</>}
            {user.main === '기타' && <>{genOption(etcArray)}</>}
          </Form.Select>
          <Form.Select
            style={{ width: '14%' }}
            name="mPro"
            defaultValue={user.mPro}
            onChange={e => onChange({ ...user, mPro: e.currentTarget.value })}
          >
            <option value="">-------</option>
            {genOption(skillArray)}
          </Form.Select>
        </Form.Control>
      )}
      {type === '지역 및 시간 설정' && (
        <Form.Control>
          <Form.Select
            style={{ width: '20%' }}
            name="onOff"
            onChange={onChangeInput}
            defaultValue={user.onOff}
          >
            {genOption(onOffArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="area"
            onChange={onChangeInput}
            defaultValue={user.area}
          >
            {genOption(areaArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="time"
            onChange={onChangeInput}
            defaultValue={user.time}
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
  user: PropTypes.objectOf(PropTypes.any),
};

MyPageSelect.defaultProps = {
  user: {},
};
