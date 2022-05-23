import styled from 'styled-components';
import { Media } from 'react-bulma-components';

export const MediaWrap = styled(Media)`
  margin-bottom: 0;
`;

export const MediaTop = styled(Media.Item)`
  overflow: hidden;
  height: 56px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const AreaText = styled.span`
  color: #716666;
`;
