import styled, { css } from 'styled-components';
import { Form } from 'react-bulma-components';
import DatePicker from 'react-datepicker';

export const CustomCheckbox = styled(Form.Checkbox)`
  ${props =>
    props.checktype === 'platform' &&
    css`
      font-size: 1rem;
    `}
  ${props =>
    props.checktype === 'field' &&
    css`
      font-size: 1.3rem;
      width: 12rem;
    `}
  margin: 1rem;
  display: flex;
  text-align: center;
  input[type='checkbox'] {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.6rem;
  }
`;

export const DateBox = styled.div`
  display: flex;
  width: 12rem;
`;

export const CustomDatePicker = styled(DatePicker)`
  margin-top: 1rem;
  padding: 0.6rem;
  width: 10rem;
  height: 3rem;
  border-radius: 0.4rem;
  border: 0.1rem solid black;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 6rem;
`;
