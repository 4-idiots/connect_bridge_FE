import styled, { css } from 'styled-components';

export const HeaderWrap = styled.div``;

export const PurposeWrap = styled.div``;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectContent = styled.div`
  width: 10rem;
  height: 2.3rem;
  background-color: black;
  color: white;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

export const HeaderTitle = styled.h3``;

export const LeaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeaderImg = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 10px;
`;

export const LeaderName = styled.div`
  font-size: 1.4rem;
  margin-left: 1rem;
`;

export const StatusBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const PageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const PageLeft = styled.div`
  max-width: 840px;
  box-sizing: border-box;
`;

export const PageRight = styled.div`
  max-width: 300px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const RightInfo = styled.div`
  padding: 0 0 20px 0;
  border-bottom: 1px solid #e6e6e6;
`;

export const RightMid = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 20px 0 20px 0;
  line-height: 1.5;
  color: #333;
`;

export const RightFollow = styled.div`
  padding: 20px 0 20px 0;
`;

export const RightPBig = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const RightPSmall = styled.p`
  font-size: 1rem;
`;
