import styled, { css } from 'styled-components';

export const contatiner = styled.div``;

export const title = styled.h2`
  color: green;
`;

export const form = styled.form``;

export const input = styled.input``;

export const submit = styled.button``;

export const serviceBox = styled.div``;

export const serviceBtn = styled.button`
  ${props =>
    props.service === 'register' &&
    css`
      color: red;
    `}
  ${props =>
    props.service === 'findID' &&
    css`
      color: green;
    `}
  ${props =>
    props.service === 'indPW' &&
    css`
      color: blue;
    `}
`;
