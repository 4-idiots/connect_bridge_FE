import styled from 'styled-components';

export const MediaBot = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(219, 219, 219, 0.5);
  position: relative;
`;

export const RecruitBox = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const RecruitCount = styled.span`
  color: #ff6347;
  margin-left: 4px;
`;

export const ResRecruit = styled.div`
  border: 1px solid #e6e6e6;
  background-color: white;
  position: absolute;
  width: 100%;
  max-width: 290px;
  bottom: 30px;
`;

export const RecruitUl = styled.ul`
  margin-top: 16px;
`;

export const RecruitLi = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

export const RecruitMean = styled.p`
  color: #424251;
  margin-left: 14px;
  width: 220px;
  font-size: min(1vw, 14px);
  font-weight: bold;
`;

export const RecruitNum = styled.p`
  width: 100vw;
  max-width: 50px;
  font-size: min(1vw, 12px);
  font-weight: bold;
  color: #3e56c4;
`;
