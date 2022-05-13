import styled from 'styled-components';

export const CmContainer = styled.div`
  padding: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CmTextBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const CmContentBox = styled.div`
  overflow: hidden;
  opacity: 0.8;
  width: 90%;
  height: 50px;
  margin-bottom: 10px;
`;

export const CmHashTagBox = styled.div``;

export const CmEventBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CmCountBox = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

export const CmIconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
`;

export const CmIconSpan = styled.span``;

export const InfoBox = styled.div`
  width: 100%;
`;

export const MPImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MPImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const SubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;
