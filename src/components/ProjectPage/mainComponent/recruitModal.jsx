import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({ item }) => {
  return (
    <S.DetailStatus>
      <S.StatusUl>
        {item.uiuxPlan ? (
          <S.StatusLi>
            <S.StatusBigP>UI/UX 기획</S.StatusBigP>
            <S.StatusSmallP>
              {item.uiuxPlanNow} / {item.uiuxPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.gamePlan ? (
          <S.StatusLi>
            <S.StatusBigP>게임 기획</S.StatusBigP>
            <S.StatusSmallP>
              {item.gamePlanNow} / {item.gamePlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.managerPlan ? (
          <S.StatusLi>
            <S.StatusBigP>프로젝트 매니저</S.StatusBigP>
            <S.StatusSmallP>
              {item.managerPlanNow} / {item.managerPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.hwPlan ? (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품) 기획</S.StatusBigP>
            <S.StatusSmallP>
              {item.hwPlanNow} / {item.hwPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.iosFr ? (
          <S.StatusLi>
            <S.StatusBigP>IOS</S.StatusBigP>
            <S.StatusSmallP>
              {item.iosFrNow} / {item.iosFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.androidFr ? (
          <S.StatusLi>
            <S.StatusBigP>안드로이드</S.StatusBigP>
            <S.StatusSmallP>
              {item.androidFrNow} / {item.androidFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.webFrontFr ? (
          <S.StatusLi>
            <S.StatusBigP>웹프론트엔드</S.StatusBigP>
            <S.StatusSmallP>
              {item.webFrontFrNow} / {item.webFrontFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.webPublicFr ? (
          <S.StatusLi>
            <S.StatusBigP>웹퍼블리셔</S.StatusBigP>
            <S.StatusSmallP>
              {item.webPublicFrNow} / {item.webPublicFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.crossFr ? (
          <S.StatusLi>
            <S.StatusBigP>크로스플랫폼</S.StatusBigP>
            <S.StatusSmallP>
              {item.crossFrNow} / {item.crossFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.graphicDe ? (
          <S.StatusLi>
            <S.StatusBigP>그래픽디자인</S.StatusBigP>
            <S.StatusSmallP>
              {item.graphicDeNow} / {item.graphicDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.uiuxDe ? (
          <S.StatusLi>
            <S.StatusBigP>UI/UX디자인</S.StatusBigP>
            <S.StatusSmallP>
              {item.uiuxDeNow} / {item.uiuxDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.thrdDe ? (
          <S.StatusLi>
            <S.StatusBigP>3D디자인</S.StatusBigP>
            <S.StatusSmallP>
              {item.thrdDeNow} / {item.thrdDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.hwDe ? (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품)디자인</S.StatusBigP>
            <S.StatusSmallP>
              {item.hwDeNow} / {item.hwDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.etcDe ? (
          <S.StatusLi>
            <S.StatusBigP>(디자인)기타</S.StatusBigP>
            <S.StatusSmallP>
              {item.etcDeNow} / {item.etcDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.webBk ? (
          <S.StatusLi>
            <S.StatusBigP>웹서버</S.StatusBigP>
            <S.StatusSmallP>
              {item.webBkNow} / {item.webBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.blchBk ? (
          <S.StatusLi>
            <S.StatusBigP>블록체인</S.StatusBigP>
            <S.StatusSmallP>
              {item.blchBkNow} / {item.blchBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.aiBk ? (
          <S.StatusLi>
            <S.StatusBigP>AI</S.StatusBigP>
            <S.StatusSmallP>
              {item.aiBkNow} / {item.aiBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.dsBk ? (
          <S.StatusLi>
            <S.StatusBigP>DB/빅데이터/DS</S.StatusBigP>
            <S.StatusSmallP>
              {item.dsBkNow} / {item.dsBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.gameBk ? (
          <S.StatusLi>
            <S.StatusBigP>게임서버</S.StatusBigP>
            <S.StatusSmallP>
              {item.gameBkNow} / {item.gameBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.planBu ? (
          <S.StatusLi>
            <S.StatusBigP>사업기획</S.StatusBigP>
            <S.StatusSmallP>
              {item.planBuNow} / {item.planBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.marketingBu ? (
          <S.StatusLi>
            <S.StatusBigP>마케팅</S.StatusBigP>
            <S.StatusSmallP>
              {item.marketingBuNow} / {item.marketingBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.financeBu ? (
          <S.StatusLi>
            <S.StatusBigP>재무/회계</S.StatusBigP>
            <S.StatusSmallP>
              {item.financeBuNow} / {item.financeBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.salesBu ? (
          <S.StatusLi>
            <S.StatusBigP>영업</S.StatusBigP>
            <S.StatusSmallP>
              {item.salesBuNow} / {item.salesBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.consultBu ? (
          <S.StatusLi>
            <S.StatusBigP>전략/컨설팅</S.StatusBigP>
            <S.StatusSmallP>
              {item.consultBuNow} / {item.consultBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.investBu ? (
          <S.StatusLi>
            <S.StatusBigP>투자/고문</S.StatusBigP>
            <S.StatusSmallP>
              {item.investBuNow} / {item.investBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.etcBu ? (
          <S.StatusLi>
            <S.StatusBigP>(사업)그외</S.StatusBigP>
            <S.StatusSmallP>
              {item.etcBuNow} / {item.etcBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.blogEtc ? (
          <S.StatusLi>
            <S.StatusBigP>작가/블로거</S.StatusBigP>
            <S.StatusSmallP>
              {item.blogEtcNow} / {item.blogEtc}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.influEtc ? (
          <S.StatusLi>
            <S.StatusBigP>인플루언서/유튜버</S.StatusBigP>
            <S.StatusSmallP>
              {item.influEtcNow} / {item.influEtc}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {item.compEtc ? (
          <S.StatusLi>
            <S.StatusBigP>작곡(사운드)</S.StatusBigP>
            <S.StatusSmallP>
              {item.compEtcNow} / {item.compEtc}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
      </S.StatusUl>
    </S.DetailStatus>
  );
};

RecruitModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
