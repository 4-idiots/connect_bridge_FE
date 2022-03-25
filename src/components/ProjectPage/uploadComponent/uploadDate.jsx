import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { ko } from 'date-fns/esm/locale';
import { CustomDatePicker, DateBox } from './uploadCustom';

export const ProjectDate = ({ start, end, startChange, endChange }) => {
  return (
    <Form.Field>
      <Form.Label>* 프로젝트 기간</Form.Label>
      <Form.Help>! 시작과 끝이 나는 날짜를 선택해주세요.</Form.Help>
      <Form.Control>
        <DateBox>
          <CustomDatePicker
            locale={ko}
            showPopperArrow={false}
            selected={start}
            onChange={startChange}
            selectsStart
            startDate={start}
            endDate={end}
            dateFormat="yyyy년 MM월 dd일"
          />
          <CustomDatePicker
            locale={ko}
            showPopperArrow={false}
            selected={end}
            onChange={endChange}
            selectsEnd
            startDate={start}
            endDate={end}
            minDate={start}
            dateFormat="yyyy년 MM월 dd일"
          />
        </DateBox>
      </Form.Control>
    </Form.Field>
  );
};

ProjectDate.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  startChange: PropTypes.func.isRequired,
  endChange: PropTypes.func.isRequired,
};
