import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button } from 'react-bulma-components';
import * as S from './style';

export const DetailRecurit = ({
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
  salseBu,
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
  salseBuNow,
  consultBuNow,
  investBuNow,
  etcBuNow,
  blogEtcNow,
  influEtcNow,
  compEtcNow,
  apply,
  userID,
  projectID,
}) => {
  return (
    <S.DetailStatus>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        모집 현황
      </Heading>
      <S.StatusUl>
        {uiuxPlan && (
          <S.StatusLi>
            <S.StatusBigP>UI/UX 기획</S.StatusBigP>
            <S.StatusSmallP>
              {uiuxPlanNow} / {uiuxPlan}
            </S.StatusSmallP>
            {uiuxPlanNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'uiux_plan_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {gamePlan && (
          <S.StatusLi>
            <S.StatusBigP>게임 기획</S.StatusBigP>
            <S.StatusSmallP>
              {gamePlanNow} / {gamePlan}
            </S.StatusSmallP>
            {gamePlanNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'game_plan_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {managerPlan && (
          <S.StatusLi>
            <S.StatusBigP>프로젝트 매니저</S.StatusBigP>
            <S.StatusSmallP>
              {managerPlanNow} / {managerPlan}
            </S.StatusSmallP>
            {managerPlanNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'manager_plan_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {hwPlan && (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품) 기획</S.StatusBigP>
            <S.StatusSmallP>
              {hwPlanNow} / {hwPlan}
            </S.StatusSmallP>
            {hwPlanNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'hw_plan_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {iosFr && (
          <S.StatusLi>
            <S.StatusBigP>IOS</S.StatusBigP>
            <S.StatusSmallP>
              {iosFrNow} / {iosFr}
            </S.StatusSmallP>
            {iosFrNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'ios_fr_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {androidFr && (
          <S.StatusLi>
            <S.StatusBigP>안드로이드</S.StatusBigP>
            <S.StatusSmallP>
              {androidFrNow} / {androidFr}
            </S.StatusSmallP>
            {androidFrNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'android_fr_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {webFrontFr && (
          <S.StatusLi>
            <S.StatusBigP>웹프론트엔드</S.StatusBigP>
            <S.StatusSmallP>
              {webFrontFrNow} / {webFrontFr}
            </S.StatusSmallP>
            {webFrontFrNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'webfront_fr_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {webPublicFr && (
          <S.StatusLi>
            <S.StatusBigP>웹퍼블리셔</S.StatusBigP>
            <S.StatusSmallP>
              {webPublicFrNow} / {webPublicFr}
            </S.StatusSmallP>
            {webPublicFrNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'webpublic_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {crossFr && (
          <S.StatusLi>
            <S.StatusBigP>크로스플랫폼</S.StatusBigP>
            <S.StatusSmallP>
              {crossFrNow} / {crossFr}
            </S.StatusSmallP>
            {crossFrNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'cross_fr_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {graphicDe && (
          <S.StatusLi>
            <S.StatusBigP>그래픽디자인</S.StatusBigP>
            <S.StatusSmallP>
              {graphicDeNow} / {graphicDe}
            </S.StatusSmallP>
            {graphicDeNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'graphic_de_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {uiuxDe && (
          <S.StatusLi>
            <S.StatusBigP>UI/UX디자인</S.StatusBigP>
            <S.StatusSmallP>
              {uiuxDeNow} / {uiuxDe}
            </S.StatusSmallP>
            {uiuxDeNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'uiux_de_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {thrdDe && (
          <S.StatusLi>
            <S.StatusBigP>3D디자인</S.StatusBigP>
            <S.StatusSmallP>
              {thrdDeNow} / {thrdDe}
            </S.StatusSmallP>
            {thrdDeNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'thrd_de_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {hwDe && (
          <S.StatusLi>
            <S.StatusBigP>하드웨어(제품)디자인</S.StatusBigP>
            <S.StatusSmallP>
              {hwDeNow} / {hwDe}
            </S.StatusSmallP>
            {hwDeNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'hw_de_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {etcDe && (
          <S.StatusLi>
            <S.StatusBigP>(디자인)기타</S.StatusBigP>
            <S.StatusSmallP>
              {etcDeNow} / {etcDe}
            </S.StatusSmallP>
            {etcDeNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'etc_de_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {webBk && (
          <S.StatusLi>
            <S.StatusBigP>웹서버</S.StatusBigP>
            <S.StatusSmallP>
              {webBkNow} / {webBk}
            </S.StatusSmallP>
            {webBkNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'web_bk_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {blchBk && (
          <S.StatusLi>
            <S.StatusBigP>블록체인</S.StatusBigP>
            <S.StatusSmallP>
              {blchBkNow} / {blchBk}
            </S.StatusSmallP>
            {blchBkNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'blch_bk_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {aiBk && (
          <S.StatusLi>
            <S.StatusBigP>AI</S.StatusBigP>
            <S.StatusSmallP>
              {aiBkNow} / {aiBk}
            </S.StatusSmallP>
            {aiBkNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'ai_bk_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {dsBk && (
          <S.StatusLi>
            <S.StatusBigP>DB/빅데이터/DS</S.StatusBigP>
            <S.StatusSmallP>
              {dsBkNow} / {dsBk}
            </S.StatusSmallP>
            {dsBkNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'ds_bk_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {gameBk && (
          <S.StatusLi>
            <S.StatusBigP>게임서버</S.StatusBigP>
            <S.StatusSmallP>
              {gameBkNow} / {gameBk}
            </S.StatusSmallP>
            {gameBkNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'game_bk_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {planBu && (
          <S.StatusLi>
            <S.StatusBigP>사업기획</S.StatusBigP>
            <S.StatusSmallP>
              {planBuNow} / {planBu}
            </S.StatusSmallP>
            {planBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'plan_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {marketingBu && (
          <S.StatusLi>
            <S.StatusBigP>마케팅</S.StatusBigP>
            <S.StatusSmallP>
              {marketingBuNow} / {marketingBu}
            </S.StatusSmallP>
            {marketingBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'marketing_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {financeBu && (
          <S.StatusLi>
            <S.StatusBigP>재무/회계</S.StatusBigP>
            <S.StatusSmallP>
              {financeBuNow} / {financeBu}
            </S.StatusSmallP>
            {financeBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'finance_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {salseBu && (
          <S.StatusLi>
            <S.StatusBigP>영업</S.StatusBigP>
            <S.StatusSmallP>
              {salseBuNow} / {salseBu}
            </S.StatusSmallP>
            {salseBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'salse_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {consultBu && (
          <S.StatusLi>
            <S.StatusBigP>전략/컨설팅</S.StatusBigP>
            <S.StatusSmallP>
              {consultBuNow} / {consultBu}
            </S.StatusSmallP>
            {consultBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'consult_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {investBu && (
          <S.StatusLi>
            <S.StatusBigP>투자/고문</S.StatusBigP>
            <S.StatusSmallP>
              {investBuNow} / {investBu}
            </S.StatusSmallP>
            {investBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'invest_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {etcBu && (
          <S.StatusLi>
            <S.StatusBigP>(사업)그외</S.StatusBigP>
            <S.StatusSmallP>
              {etcBuNow} / {etcBu}
            </S.StatusSmallP>
            {etcBuNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'etc_bu_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {blogEtc && (
          <S.StatusLi>
            <S.StatusBigP>작가/블로거</S.StatusBigP>
            <S.StatusSmallP>
              {blogEtcNow} / {blogEtc}
            </S.StatusSmallP>
            {blogEtcNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'blog_etc_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {influEtc && (
          <S.StatusLi>
            <S.StatusBigP>인플루언서/유튜버</S.StatusBigP>
            <S.StatusSmallP>
              {influEtcNow} / {influEtc}
            </S.StatusSmallP>
            {influEtcNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'influ_etc_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
        {compEtc && (
          <S.StatusLi>
            <S.StatusBigP>작곡(사운드)</S.StatusBigP>
            <S.StatusSmallP>
              {compEtcNow} / {compEtc}
            </S.StatusSmallP>
            {compEtcNow === 0 ? (
              <Button color="danger">완료</Button>
            ) : (
              <Button
                color="info"
                onClick={apply(projectID, userID, 'comp_etc_now')}
              >
                신청
              </Button>
            )}
          </S.StatusLi>
        )}
      </S.StatusUl>
    </S.DetailStatus>
  );
};

DetailRecurit.propTypes = {
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
  salseBu: PropTypes.number.isRequired,
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
  salseBuNow: PropTypes.number.isRequired,
  consultBuNow: PropTypes.number.isRequired,
  investBuNow: PropTypes.number.isRequired,
  etcBuNow: PropTypes.number.isRequired,
  blogEtcNow: PropTypes.number.isRequired,
  influEtcNow: PropTypes.number.isRequired,
  compEtcNow: PropTypes.number.isRequired,
  apply: PropTypes.func.isRequired,
  userID: PropTypes.number.isRequired,
  projectID: PropTypes.number.isRequired,
};
