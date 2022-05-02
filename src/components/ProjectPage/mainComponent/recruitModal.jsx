/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const RecruitModal = ({
  uiuxPlan,
  gamePlan,
  managerPlan,
  hwPlan,
  iosFr,
  androidFr,
  webFrontFr,
  webPublicFr,
  crossFr,
  uiuxDe,
  graphicDe,
  thrdDe,
  hwDe,
  etcDe,
  webBk,
  blchBk,
  aiBk,
  dsBk,
  gameBk,
  planBu,
  marketingBu,
  financeBu,
  salesBu,
  consultBu,
  investBu,
  etcBu,
  blogEtc,
  influEtc,
  compEtc,
  uiuxPlanNow,
  gamePlanNow,
  managerPlanNow,
  hwPlanNow,
  iosFrNow,
  androidFrNow,
  webFrontFrNow,
  webPublicFrNow,
  crossFrNow,
  uiuxDeNow,
  graphicDeNow,
  thrdDeNow,
  hwDeNow,
  etcDeNow,
  webBkNow,
  blchBkNow,
  aiBkNow,
  dsBkNow,
  gameBkNow,
  planBuNow,
  marketingBuNow,
  financeBuNow,
  salesBuNow,
  consultBuNow,
  investBuNow,
  etcBuNow,
  blogEtcNow,
  influEtcNow,
  compEtcNow,
}) => {
  return (
    <S.DetailStatus>
      <S.StatusUl>
        {uiuxPlan ? (
          <S.StatusLi>
            <S.StatusBigP>UI/UX 기획</S.StatusBigP>
            <S.StatusSmallP>
              {uiuxPlanNow} / {uiuxPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {gamePlan ? (
          <S.StatusLi>
            <S.StatusBigP>게임 기획</S.StatusBigP>
            <S.StatusSmallP>
              {gamePlanNow} / {gamePlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {managerPlan ? (
          <S.StatusLi>
            <S.StatusBigP>프로젝트 매니저</S.StatusBigP>
            <S.StatusSmallP>
              {managerPlanNow} / {managerPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {hwPlan ? (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품) 기획</S.StatusBigP>
            <S.StatusSmallP>
              {hwPlanNow} / {hwPlan}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {iosFr ? (
          <S.StatusLi>
            <S.StatusBigP>IOS</S.StatusBigP>
            <S.StatusSmallP>
              {iosFrNow} / {iosFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {androidFr ? (
          <S.StatusLi>
            <S.StatusBigP>안드로이드</S.StatusBigP>
            <S.StatusSmallP>
              {androidFrNow} / {androidFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {webFrontFr ? (
          <S.StatusLi>
            <S.StatusBigP>웹프론트엔드</S.StatusBigP>
            <S.StatusSmallP>
              {webFrontFrNow} / {webFrontFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {webPublicFr ? (
          <S.StatusLi>
            <S.StatusBigP>웹퍼블리셔</S.StatusBigP>
            <S.StatusSmallP>
              {webPublicFrNow} / {webPublicFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {crossFr ? (
          <S.StatusLi>
            <S.StatusBigP>크로스플랫폼</S.StatusBigP>
            <S.StatusSmallP>
              {crossFrNow} / {crossFr}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {graphicDe ? (
          <S.StatusLi>
            <S.StatusBigP>그래픽디자인</S.StatusBigP>
            <S.StatusSmallP>
              {graphicDeNow} / {graphicDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {uiuxDe ? (
          <S.StatusLi>
            <S.StatusBigP>UI/UX디자인</S.StatusBigP>
            <S.StatusSmallP>
              {uiuxDeNow} / {uiuxDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {thrdDe ? (
          <S.StatusLi>
            <S.StatusBigP>3D디자인</S.StatusBigP>
            <S.StatusSmallP>
              {thrdDeNow} / {thrdDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {hwDe ? (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품)디자인</S.StatusBigP>
            <S.StatusSmallP>
              {hwDeNow} / {hwDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {etcDe ? (
          <S.StatusLi>
            <S.StatusBigP>(디자인)기타</S.StatusBigP>
            <S.StatusSmallP>
              {etcDeNow} / {etcDe}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {webBk ? (
          <S.StatusLi>
            <S.StatusBigP>웹서버</S.StatusBigP>
            <S.StatusSmallP>
              {webBkNow} / {webBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {blchBk ? (
          <S.StatusLi>
            <S.StatusBigP>블록체인</S.StatusBigP>
            <S.StatusSmallP>
              {blchBkNow} / {blchBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {aiBk ? (
          <S.StatusLi>
            <S.StatusBigP>AI</S.StatusBigP>
            <S.StatusSmallP>
              {aiBkNow} / {aiBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {dsBk ? (
          <S.StatusLi>
            <S.StatusBigP>DB/빅데이터/DS</S.StatusBigP>
            <S.StatusSmallP>
              {dsBkNow} / {dsBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {gameBk ? (
          <S.StatusLi>
            <S.StatusBigP>게임서버</S.StatusBigP>
            <S.StatusSmallP>
              {gameBkNow} / {gameBk}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {planBu ? (
          <S.StatusLi>
            <S.StatusBigP>사업기획</S.StatusBigP>
            <S.StatusSmallP>
              {planBuNow} / {planBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {marketingBu ? (
          <S.StatusLi>
            <S.StatusBigP>마케팅</S.StatusBigP>
            <S.StatusSmallP>
              {marketingBuNow} / {marketingBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {financeBu ? (
          <S.StatusLi>
            <S.StatusBigP>재무/회계</S.StatusBigP>
            <S.StatusSmallP>
              {financeBuNow} / {financeBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {salesBu ? (
          <S.StatusLi>
            <S.StatusBigP>영업</S.StatusBigP>
            <S.StatusSmallP>
              {salesBuNow} / {salesBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {consultBu ? (
          <S.StatusLi>
            <S.StatusBigP>전략/컨설팅</S.StatusBigP>
            <S.StatusSmallP>
              {consultBuNow} / {consultBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {investBu ? (
          <S.StatusLi>
            <S.StatusBigP>투자/고문</S.StatusBigP>
            <S.StatusSmallP>
              {investBuNow} / {investBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {etcBu ? (
          <S.StatusLi>
            <S.StatusBigP>(사업)그외</S.StatusBigP>
            <S.StatusSmallP>
              {etcBuNow} / {etcBu}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {blogEtc ? (
          <S.StatusLi>
            <S.StatusBigP>작가/블로거</S.StatusBigP>
            <S.StatusSmallP>
              {blogEtcNow} / {blogEtc}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {influEtc ? (
          <S.StatusLi>
            <S.StatusBigP>인플루언서/유튜버</S.StatusBigP>
            <S.StatusSmallP>
              {influEtcNow} / {influEtc}
            </S.StatusSmallP>
          </S.StatusLi>
        ) : (
          ''
        )}
        {compEtc ? (
          <S.StatusLi>
            <S.StatusBigP>작곡(사운드)</S.StatusBigP>
            <S.StatusSmallP>
              {compEtcNow} / {compEtc}
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
  uiuxPlan: PropTypes.number.isRequired,
  gamePlan: PropTypes.number.isRequired,
  managerPlan: PropTypes.number.isRequired,
  hwPlan: PropTypes.number.isRequired,
  iosFr: PropTypes.number.isRequired,
  androidFr: PropTypes.number.isRequired,
  webFrontFr: PropTypes.number.isRequired,
  webPublicFr: PropTypes.number.isRequired,
  crossFr: PropTypes.number.isRequired,
  uiuxDe: PropTypes.number.isRequired,
  graphicDe: PropTypes.number.isRequired,
  thrdDe: PropTypes.number.isRequired,
  hwDe: PropTypes.number.isRequired,
  etcDe: PropTypes.number.isRequired,
  webBk: PropTypes.number.isRequired,
  blchBk: PropTypes.number.isRequired,
  aiBk: PropTypes.number.isRequired,
  dsBk: PropTypes.number.isRequired,
  gameBk: PropTypes.number.isRequired,
  planBu: PropTypes.number.isRequired,
  marketingBu: PropTypes.number.isRequired,
  financeBu: PropTypes.number.isRequired,
  salesBu: PropTypes.number.isRequired,
  consultBu: PropTypes.number.isRequired,
  investBu: PropTypes.number.isRequired,
  etcBu: PropTypes.number.isRequired,
  blogEtc: PropTypes.number.isRequired,
  influEtc: PropTypes.number.isRequired,
  compEtc: PropTypes.number.isRequired,
  uiuxPlanNow: PropTypes.number.isRequired,
  gamePlanNow: PropTypes.number.isRequired,
  managerPlanNow: PropTypes.number.isRequired,
  hwPlanNow: PropTypes.number.isRequired,
  iosFrNow: PropTypes.number.isRequired,
  androidFrNow: PropTypes.number.isRequired,
  webFrontFrNow: PropTypes.number.isRequired,
  webPublicFrNow: PropTypes.number.isRequired,
  crossFrNow: PropTypes.number.isRequired,
  uiuxDeNow: PropTypes.number.isRequired,
  graphicDeNow: PropTypes.number.isRequired,
  thrdDeNow: PropTypes.number.isRequired,
  hwDeNow: PropTypes.number.isRequired,
  etcDeNow: PropTypes.number.isRequired,
  webBkNow: PropTypes.number.isRequired,
  blchBkNow: PropTypes.number.isRequired,
  aiBkNow: PropTypes.number.isRequired,
  dsBkNow: PropTypes.number.isRequired,
  gameBkNow: PropTypes.number.isRequired,
  planBuNow: PropTypes.number.isRequired,
  marketingBuNow: PropTypes.number.isRequired,
  financeBuNow: PropTypes.number.isRequired,
  salesBuNow: PropTypes.number.isRequired,
  consultBuNow: PropTypes.number.isRequired,
  investBuNow: PropTypes.number.isRequired,
  etcBuNow: PropTypes.number.isRequired,
  blogEtcNow: PropTypes.number.isRequired,
  influEtcNow: PropTypes.number.isRequired,
  compEtcNow: PropTypes.number.isRequired,
};
