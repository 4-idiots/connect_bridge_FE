import styled from 'styled-components';

export const NoticeBox = styled.div`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const NoticeContent = styled.div`
  margin-left: 10px;
`;

export const NoticeUploadWrap = styled.div`
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const ApplyCardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ApplyCardLeft = styled.div``;

export const ApplyCardRight = styled.div``;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;

export const PSBox = styled.div`
  width: 100%;
`;

export const PSNull = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  height: 74px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PSText = styled.span`
  opacity: 0.6;
`;

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 3rem;
  column-gap: 1rem;
`;

export const TabletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4rem;
  column-gap: 1rem;
`;
