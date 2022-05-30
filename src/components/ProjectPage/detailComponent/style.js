import styled from 'styled-components';

export const HeaderWrap = styled.div`
  padding: 40px 0 44px;
`;

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
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;

export const PageWrapMobile = styled.div`
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;
export const PageWrapTablet = styled.div`
  box-sizing: border-box;
  padding: 0 25px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export const PageRight = styled.div`
  max-width: 300px;
  max-height: 600px;
  width: 90%;
  height: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  margin-left: 30px;
`;

export const RightInfo = styled.div`
  padding: 0 0 20px 0;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
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

export const PageLeft = styled.div`
  max-width: 840px;
  box-sizing: border-box;
  padding: 0 0 40px;
  width: 100%;
`;

export const LeftTab = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabUpdate = styled.div`
  font-size: 15px;
  color: #42495b;
  padding: 12px;
  border: 1px solid #000;
`;

export const TalUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const TabLi = styled.li`
  font-size: 15px;
  color: #42495b;
  padding: 12px;
  border: 1px solid #000;
`;

export const LeftDetail = styled.div`
  display: block;
`;

export const DetailStatus = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
  margin-bottom: 35px;
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
  margin-right: 30px;
  width: 221px;
  font-weight: bold;
`;

export const StatusSmallP = styled.p`
  margin-right: 34px;
  width: 60px;
`;

export const DetailPlatform = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
`;

export const PlatformWrap = styled.div`
  display: flex;
`;

export const PlatformBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const PlatformText = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
`;

export const DetailContent = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
`;

export const SkillWrap = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
`;

export const SkillBox = styled.div`
  display: flex;
`;

export const ReferenceWrap = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
`;

export const CommentWrap = styled.div`
  padding: 15px 24px 15px 0;
`;

export const CustomFormWrap = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
`;

export const MediaBox = styled.div``;

export const DetailMember = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 15px 24px 15px 0;
`;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  place-items: center;
`;

export const MemberCardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const MemberCardLeft = styled.div`
  font-size: 18px;
`;

export const MemberCardRight = styled.div`
  font-size: 18px;
  opacity: 0.7;
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
