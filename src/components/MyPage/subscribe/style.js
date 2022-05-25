import styled from 'styled-components';

export const SubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;

export const PSBox = styled.div`
  width: 84vw;
`;

export const PSNull = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  height: 74px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PSText = styled.span`
  opacity: 0.6;
`;
