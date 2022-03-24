import styled, { css } from 'styled-components';
import { Form } from 'react-bulma-components';

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
