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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;
