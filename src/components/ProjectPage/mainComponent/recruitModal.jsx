import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({ item }) => {
  return (
    <S.ResRecruit>
      <S.RecruitUl>
        {item.uiuxPlan ? (
          <S.RecruitLi>
            <S.RecruitMean>UI/UX 기획</S.RecruitMean>
            <S.RecruitNum>
              {item.uiuxPlanNow} / {item.uiuxPlan}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.gamePlan ? (
          <S.RecruitLi>
            <S.RecruitMean>게임 기획</S.RecruitMean>
            <S.RecruitNum>
              {item.gamePlanNow} / {item.gamePlan}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.managerPlan ? (
          <S.RecruitLi>
            <S.RecruitMean>프로젝트 매니저</S.RecruitMean>
            <S.RecruitNum>
              {item.managerPlanNow} / {item.managerPlan}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.hwPlan ? (
          <S.RecruitLi>
            <S.RecruitMean>하드웨어(제품) 기획</S.RecruitMean>
            <S.RecruitNum>
              {item.hwPlanNow} / {item.hwPlan}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.iosFr ? (
          <S.RecruitLi>
            <S.RecruitMean>IOS</S.RecruitMean>
            <S.RecruitNum>
              {item.iosFrNow} / {item.iosFr}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.androidFr ? (
          <S.RecruitLi>
            <S.RecruitMean>안드로이드</S.RecruitMean>
            <S.RecruitNum>
              {item.androidFrNow} / {item.androidFr}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.webFrontFr ? (
          <S.RecruitLi>
            <S.RecruitMean>웹프론트엔드</S.RecruitMean>
            <S.RecruitNum>
              {item.webFrontFrNow} / {item.webFrontFr}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.webPublicFr ? (
          <S.RecruitLi>
            <S.RecruitMean>웹퍼블리셔</S.RecruitMean>
            <S.RecruitNum>
              {item.webPublicFrNow} / {item.webPublicFr}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.crossFr ? (
          <S.RecruitLi>
            <S.RecruitMean>크로스플랫폼</S.RecruitMean>
            <S.RecruitNum>
              {item.crossFrNow} / {item.crossFr}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.graphicDe ? (
          <S.RecruitLi>
            <S.RecruitMean>그래픽디자인</S.RecruitMean>
            <S.RecruitNum>
              {item.graphicDeNow} / {item.graphicDe}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.uiuxDe ? (
          <S.RecruitLi>
            <S.RecruitMean>UI/UX디자인</S.RecruitMean>
            <S.RecruitNum>
              {item.uiuxDeNow} / {item.uiuxDe}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.thrdDe ? (
          <S.RecruitLi>
            <S.RecruitMean>3D디자인</S.RecruitMean>
            <S.RecruitNum>
              {item.thrdDeNow} / {item.thrdDe}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.hwDe ? (
          <S.RecruitLi>
            <S.RecruitMean>하드웨어(제품)디자인</S.RecruitMean>
            <S.RecruitNum>
              {item.hwDeNow} / {item.hwDe}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.etcDe ? (
          <S.RecruitLi>
            <S.RecruitMean>(디자인)기타</S.RecruitMean>
            <S.RecruitNum>
              {item.etcDeNow} / {item.etcDe}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.webBk ? (
          <S.RecruitLi>
            <S.RecruitMean>웹서버</S.RecruitMean>
            <S.RecruitNum>
              {item.webBkNow} / {item.webBk}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.blchBk ? (
          <S.RecruitLi>
            <S.RecruitMean>블록체인</S.RecruitMean>
            <S.RecruitNum>
              {item.blchBkNow} / {item.blchBk}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.aiBk ? (
          <S.RecruitLi>
            <S.RecruitMean>AI</S.RecruitMean>
            <S.RecruitNum>
              {item.aiBkNow} / {item.aiBk}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.dsBk ? (
          <S.RecruitLi>
            <S.RecruitMean>DB/빅데이터/DS</S.RecruitMean>
            <S.RecruitNum>
              {item.dsBkNow} / {item.dsBk}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.gameBk ? (
          <S.RecruitLi>
            <S.RecruitMean>게임서버</S.RecruitMean>
            <S.RecruitNum>
              {item.gameBkNow} / {item.gameBk}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.planBu ? (
          <S.RecruitLi>
            <S.RecruitMean>사업기획</S.RecruitMean>
            <S.RecruitNum>
              {item.planBuNow} / {item.planBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.marketingBu ? (
          <S.RecruitLi>
            <S.RecruitMean>마케팅</S.RecruitMean>
            <S.RecruitNum>
              {item.marketingBuNow} / {item.marketingBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.financeBu ? (
          <S.RecruitLi>
            <S.RecruitMean>재무/회계</S.RecruitMean>
            <S.RecruitNum>
              {item.financeBuNow} / {item.financeBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.salesBu ? (
          <S.RecruitLi>
            <S.RecruitMean>영업</S.RecruitMean>
            <S.RecruitNum>
              {item.salesBuNow} / {item.salesBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.consultBu ? (
          <S.RecruitLi>
            <S.RecruitMean>전략/컨설팅</S.RecruitMean>
            <S.RecruitNum>
              {item.consultBuNow} / {item.consultBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.investBu ? (
          <S.RecruitLi>
            <S.RecruitMean>투자/고문</S.RecruitMean>
            <S.RecruitNum>
              {item.investBuNow} / {item.investBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.etcBu ? (
          <S.RecruitLi>
            <S.RecruitMean>(사업)그외</S.RecruitMean>
            <S.RecruitNum>
              {item.etcBuNow} / {item.etcBu}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.blogEtc ? (
          <S.RecruitLi>
            <S.RecruitMean>작가/블로거</S.RecruitMean>
            <S.RecruitNum>
              {item.blogEtcNow} / {item.blogEtc}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.influEtc ? (
          <S.RecruitLi>
            <S.RecruitMean>인플루언서/유튜버</S.RecruitMean>
            <S.RecruitNum>
              {item.influEtcNow} / {item.influEtc}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
        {item.compEtc ? (
          <S.RecruitLi>
            <S.RecruitMean>작곡(사운드)</S.RecruitMean>
            <S.RecruitNum>
              {item.compEtcNow} / {item.compEtc}
            </S.RecruitNum>
          </S.RecruitLi>
        ) : (
          ''
        )}
      </S.RecruitUl>
    </S.ResRecruit>
  );
};

RecruitModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
