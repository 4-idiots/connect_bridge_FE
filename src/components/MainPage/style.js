import styled from 'styled-components';
import { Navbar } from 'react-bulma-components';

export const CustomItem = styled(Navbar.Item)`
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
`;

export const CustomUserItem = styled(Navbar.Item)`
  font-size: 24px;
  font-weight: bold;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;

export const BannerBox = styled.div`
  margin: 80px 0 30px 0;
  background-color: #dcdcdc;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BnTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BnMainText = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const BnSubText = styled.span`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
`;
