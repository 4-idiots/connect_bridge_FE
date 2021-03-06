import styled from 'styled-components';

export const SuggestTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SuggestName = styled.div`
  height: 22px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const AreaText = styled.span`
  color: #716666;
`;

export const SuggestIconWrap = styled.div`
  display: flex;
  margin-right: 20px;
`;
