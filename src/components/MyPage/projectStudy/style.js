import styled from 'styled-components';
import { Card } from 'react-bulma-components';

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

export const PSTrue = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
`;

export const CustomDiv = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

export const gridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
`;

export const newWrap = styled.div`
  width: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const textWrap = styled.div`
  text-align: left;
  width: 100%;
  margin: 14px;
  padding-left: 14px;
`;

export const newCardContainer = styled.div`
  width: 520px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const newImg = styled.div`
  width: 516px;
  padding: 8px 0 4px 0;
  background-color: #eee;
  border-radius: 3%;
`;

export const newBottom = styled.div`
  width: 518px;
  height: 132px;
  padding: 12px;
`;

export const newField = styled.p`
  font-size: 14px;
  color: #b1b1b1;
  font-weight: bold;
`;

export const newName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 10px 0;
  display: inline-block;
`;

export const newInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const newEveBox = styled.div`
  position: relative;
`;

export const newreBox = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const newRecruit = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const newIconBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;
`;

export const suggestWrap = styled.div`
  width: 590px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const suggestCardContainer = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const suggestBox = styled.div`
  width: 580px;
  height: 98px;
  margin-bottom: 12px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const suggestImg = styled.img`
  width: 104px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #f3f3f4;
`;

export const suggestInfo = styled.div``;

export const suggestTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 8px;
`;

export const suggestName = styled.div`
  height: 18px;
  font-weight: bold;
`;

export const suggestMid = styled.div`
  overflow: hidden;
  height: 28px;
  width: 400px;
`;

export const suggestBottom = styled.div`
  height: 30px;
  width: 400px;
`;

export const suggestHeart = styled.div`
  height: 18px;
  margin-right: 6px;
`;

export const suggestIconWrap = styled.div`
  display: flex;
`;

export const DetailStatus = styled.div`
  border: 1px solid #e6e6e6;
  margin-bottom: 35px;
  background-color: white;
  position: absolute;
  width: 240px;
  bottom: 0;
`;

export const StatusUl = styled.ul`
  margin-top: 16px;
`;

export const StatusLi = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

export const StatusBigP = styled.p`
  color: #424251;
  margin-left: 20px;
  width: 220px;
  font-size: 14px;
  font-weight: bold;
`;

export const StatusSmallP = styled.p`
  margin-right: 20px;
  width: 50px;
  font-size: 12px;
  font-weight: bold;
  color: #3e56c4;
`;

export const mainRecruitBox = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const mainRecruitWrap = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(219, 219, 219, 0.5);
  position: relative;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
`;
export const ProjectGridMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
  margin-left: 20px;
`;
export const ProjectGridTablet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  margin-bottom: 80px;
  margin-left: 70px;
`;

export const ResCard = styled(Card)`
  width: 300px;
  height: 360px;
  max-width: 290px;
  max-height: 360px;
  border-radius: 5%;
  position: relative;
  margin-left: 10px;
`;

export const ResImg = styled.img`
  width: 300px;
  height: 360px;
  max-height: 160px;
  border-radius: 5%;
  object-fit: cover;
`;

export const ResType = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  background-color: black;
  color: white;
  padding: 5px;
  font-weight: bold;
  font-size: min(1.4vw, 18px);
`;

export const ResIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

export const ResNormal = styled.div``;

export const ResIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.mar};
`;

export const ResRecruitBox = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const ResRecruitWrap = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(219, 219, 219, 0.5);
  position: relative;
`;

export const ResSpan = styled.span`
  color: #ff6347;
  margin-left: 4px;
`;
