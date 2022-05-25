import styled from 'styled-components';

export const gridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
`;
export const gridBoxTablet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
`;
export const gridBoxMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
`;

export const newWrap = styled.div`
  width: 100%;
  max-width: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;
`;
export const newWrapMobile = styled.div`
  max-width: 100%;
  margin-top: 20px;
  flex: 1 1;
  width: 100%;
  transition: all 0.2s;
  margin-right: 20px;
`;

export const textWrap = styled.div`
  text-align: left;
  width: 100%;
  margin: 14px;
  padding-left: 14px;
`;

export const suggestWrap = styled.div`
  width: 590px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResSuggestWrap = styled.div`
  width: 100%;
  max-width: 590px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResSuggestWrapMobile = styled.div`
  max-width: 100%;
  margin-top: 20px;
  flex: 1 1;
  width: 100%;
  transition: all 0.2s;
  margin-right: 20px;
`;

export const PSBox = styled.div`
  width: 84vw;
`;

export const PSNull = styled.div`
  width: 100%;
  padding: 40px;
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
