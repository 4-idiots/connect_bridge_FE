import styled from 'styled-components';
import { Media, Content } from 'react-bulma-components';

export const MediaMid = styled(Media)``;

export const MediaContent = styled(Content)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.mar};
`;

export const IconCount = styled.div``;
