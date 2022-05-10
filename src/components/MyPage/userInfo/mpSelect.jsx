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
            name="userInterestMain"
            onChange={e =>
              onChange({ ...user, userInterestMain: e.currentTarget.value })
            }
            defaultValue={user.userInterestMain}
          >
            <option value="">-------</option>
            {genOption(mainArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="userInterestSub"
            onChange={e =>
              onChange({ ...user, userInterestSub: e.currentTarget.value })
            }
            defaultValue={user.userInterestSub}
          >
            <option value="">-------</option>
            {user.userInterestMain === '기획' && <>{genOption(planArray)}</>}
            {user.userInterestMain === '디자인' && (
              <>{genOption(designArray)}</>
            )}
            {user.userInterestMain === '프론트엔드개발' && (
              <>{genOption(frontArray)}</>
            )}
            {user.userInterestMain === '백엔드개발' && (
              <>{genOption(backArray)}</>
            )}
            {user.userInterestMain === '사업' && <>{genOption(coopArray)}</>}
            {user.userInterestMain === '기타' && <>{genOption(etcArray)}</>}
          </Form.Select>
          <Form.Select
            style={{ width: '14%' }}
            name="userAbility"
            defaultValue={user.userAbility}
            onChange={e =>
              onChange({ ...user, userAbility: e.currentTarget.value })
            }
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
            name="userTime"
            onChange={onChangeInput}
            defaultValue={user.userTime}
          >
            {genOption(onOffArray)}
          </Form.Select>
          <Form.Select
            style={{ width: '16%' }}
            name="userArea"
            onChange={onChangeInput}
            defaultValue={user.userArea}
          >
            {genOption(areaArray)}
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
