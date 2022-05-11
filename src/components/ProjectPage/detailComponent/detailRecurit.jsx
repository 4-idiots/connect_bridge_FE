/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Heading, Button } from 'react-bulma-components';
import { useAuth } from '../../../contexts/hooks/useAuth';
import * as S from './style';

export const DetailRecurit = ({ item, apply, projectID }) => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  return (
    <S.DetailStatus>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        모집 현황
      </Heading>
      <S.StatusUl>
        {decodedToken && (
          <div>
            {item.uiuxPlan ? (
              <S.StatusLi>
                <S.StatusBigP>UI/UX 기획</S.StatusBigP>
                <S.StatusSmallP>
                  {item.uiuxPlanNow} / {item.uiuxPlan}
                </S.StatusSmallP>
                {item.uiuxPlanNow !== 0 ? (
                  <>
                    {item.uiuxPlan === item.uiuxPlanNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'uiux_plan');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'uiux_plan');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.gamePlanNow !== 0 ? (
                  <>
                    {item.gamePlan === item.gamePlanNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'game_plan');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'game_plan');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.managerPlanNow !== 0 ? (
                  <>
                    {item.managerPlan === item.managerPlanNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'manager_plan');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'manager_plan');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.hwPlanNow !== 0 ? (
                  <>
                    {item.hwPlan === item.hwPlanNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'hw_plan');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'hw_plan');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.iosFrNow !== 0 ? (
                  <>
                    {item.iosFr === item.iosFrNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'ios_fr');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'ios_fr');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.androidFrNow !== 0 ? (
                  <>
                    {item.androidFr === item.androidFrNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'android_fr');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'android_fr');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.webFrontFrNow !== 0 ? (
                  <>
                    {item.webFrontFr === item.webFrontFrNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'webfront_fr');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'webfront_fr');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.webPublicFrNow !== 0 ? (
                  <>
                    {item.webPublicFr === item.webPublicFrNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'webpublick_fr');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'webpublick_fr');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.crossFrNow !== 0 ? (
                  <>
                    {item.crossFr === item.crossFrNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'cross_fr');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'cross_fr');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.graphicDeNow !== 0 ? (
                  <>
                    {item.graphicDe === item.graphicDeNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'graphic_de');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'graphic_de');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.uiuxDeNow !== 0 ? (
                  <>
                    {item.uiuxDe === item.uiuxDeNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'uiux_de');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'uiux_de');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.thrdDeNow !== 0 ? (
                  <>
                    {item.thrdDe === item.thrdDeNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'thr_de');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'thr_de');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.hwDeNow !== 0 ? (
                  <>
                    {item.hwDe === item.hwDeNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'hw_de');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'hw_de');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.etcDeNow !== 0 ? (
                  <>
                    {item.etcDe === item.etcDeNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'etc_de');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'etc_de');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.webBkNow !== 0 ? (
                  <>
                    {item.webBk === item.webBkNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'web_bk');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'web_bk');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.blchBkNow !== 0 ? (
                  <>
                    {item.blchBk === item.blchBkNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'blch_bk');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'blch_bk');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.aiBkNow !== 0 ? (
                  <>
                    {item.aiBk === item.aiBkNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'ai_bk');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'ai_bk');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.dsBkNow !== 0 ? (
                  <>
                    {item.dsBk === item.dsBkNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'ds_bk');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'ds_bk');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.gameBkNow !== 0 ? (
                  <>
                    {item.gameBk === item.gameBkNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'game_bk');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'game_bk');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.planBuNow !== 0 ? (
                  <>
                    {item.planBu === item.planBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'plan_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'plan_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.marketingBuNow !== 0 ? (
                  <>
                    {item.marketingBu === item.marketingBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'marketing_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'marketing_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.financeBuNow !== 0 ? (
                  <>
                    {item.financeBu === item.financeBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'finance_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'finance_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.salesBuNow !== 0 ? (
                  <>
                    {item.salesBu === item.salesBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'sales_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'sales_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.consultBuNow !== 0 ? (
                  <>
                    {item.consultBu === item.consultBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'consult_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'consult_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.investBuNow !== 0 ? (
                  <>
                    {item.investBu === item.investBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'invest_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'invest_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.etcBuNow !== 0 ? (
                  <>
                    {item.etcBu === item.etcBuNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'etc_bu');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'etc_bu');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.blogEtcNow !== 0 ? (
                  <>
                    {item.blogEtc === item.blogEtcNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'blog_etc');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'blog_etc');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.influEtcNow !== 0 ? (
                  <>
                    {item.influEtc === item.influEtcNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'influ_etc');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'influ_etc');
                    }}
                  >
                    신청
                  </Button>
                )}
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
                {item.compEtcNow !== 0 ? (
                  <>
                    {item.compEtc === item.compEtcNow ? (
                      <Button color="danger">완료</Button>
                    ) : (
                      <Button
                        color="info"
                        onClick={() => {
                          apply(projectID, decodedToken.id, 'comp_etc');
                        }}
                      >
                        신청
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    color="info"
                    onClick={() => {
                      apply(projectID, decodedToken.id, 'comp_etc');
                    }}
                  >
                    신청
                  </Button>
                )}
              </S.StatusLi>
            ) : (
              ''
            )}
          </div>
        )}
      </S.StatusUl>
    </S.DetailStatus>
  );
};

DetailRecurit.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  apply: PropTypes.func.isRequired,
  projectID: PropTypes.number.isRequired,
};
