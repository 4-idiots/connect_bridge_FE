import styled from 'styled-components';
import { Button, Box, Card } from 'react-bulma-components';

export const OdCardImgBox = styled.div`
  height: 100%;
  max-height: 300px;
  overflow: hidden;
`;

export const OdCardBtnGroup = styled(Button.Group)`
  width: 100%;
  max-width: 232px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4px;
`;

export const OdCardUserBtndBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 232px;
`;

export const OdMainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
`;

export const OdMainBox = styled(Box)`
  border-radius: 50%;
  background-color: 'brown';
  position: fixed;
  bottom: 8rem;
  right: 10rem;
  z-index: 1;
`;

export const OdUploadBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OdCard = styled(Card)`
  width: 90%;
  max-width: 280%;
  height: 100%;
  max-height: 500;
`;
