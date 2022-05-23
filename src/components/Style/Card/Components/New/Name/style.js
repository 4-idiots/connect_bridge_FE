import styled from 'styled-components';

export const NewName = styled.span`
  font-size: min(2vw, 18px);
  font-weight: bold;
  margin: 10px 0 10px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 30px;
`;

export const AreaText = styled.span`
  color: #716666;
`;
