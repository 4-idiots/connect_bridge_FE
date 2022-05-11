import React, { useState } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';

export const SuggestCard = ({ item }) => {
  const navigate = useNavigate();
  const [onRecruit, setOnRecruit] = useState(false);
  return (
    <S.suggestCardContainer
      onClick={() => navigate(`/project/${item.projectID}`)}
    >
      <S.suggestBox>
        <S.suggestImg src={item.projectImg} />
        <S.suggestInfo>
          <S.suggestTop>
            <S.suggestName>{item.projectName}</S.suggestName>
            <S.suggestIconWrap>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <span style={{ margin: '0 10px 0 2px' }}>{item.projectLike}</span>
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <span style={{ marginLeft: 2 }}>{item.projectView}</span>
            </S.suggestIconWrap>
          </S.suggestTop>
          <S.suggestMid>
            <ReadOnlySlate value={item.content} />
          </S.suggestMid>
          <S.suggestBottom>
            <S.newEveBox
              onMouseEnter={() => {
                setOnRecruit(true);
              }}
              onMouseLeave={() => {
                setOnRecruit(false);
              }}
            >
              <S.newreBox>
                모집현황
                <Icon>
                  <i className="fas fa-arrow-up" />
                </Icon>
              </S.newreBox>
              {onRecruit ? (
                <RecruitModal
                  uiuxPlan={item.uiuxPlan}
                  gamePlan={item.gamePlan}
                  managerPlan={item.managerPlan}
                  hwPlan={item.hwPlan}
                  iosFr={item.iosFr}
                  androidFr={item.androidFr}
                  webFrontFr={item.webFrontFr}
                  webPublicFr={item.webPublicFr}
                  crossFr={item.crossFr}
                  uiuxDe={item.uiuxDe}
                  graphicDe={item.graphicDe}
                  thrdDe={item.thrdDe}
                  hwDe={item.hwDe}
                  etcDe={item.etcDe}
                  webBk={item.webBk}
                  blchBk={item.blchBk}
                  aiBk={item.aiBk}
                  dsBk={item.dsBk}
                  gameBk={item.gameBk}
                  planBu={item.planBu}
                  marketingBu={item.marketingBu}
                  financeBu={item.financeBu}
                  salesBu={item.salesBu}
                  consultBu={item.consultBu}
                  investBu={item.investBu}
                  etcBu={item.etcBu}
                  blogEtc={item.blogEtc}
                  influEtc={item.influEtc}
                  compEtc={item.compEtc}
                  uiuxPlanNow={item.uiuxPlanNow}
                  gamePlanNow={item.gamePlanNow}
                  managerPlanNow={item.managerPlanNow}
                  hwPlanNow={item.hwPlanNow}
                  iosFrNow={item.iosFrNow}
                  androidFrNow={item.androidFrNow}
                  webFrontFrNow={item.webFrontFrNow}
                  webPublicFrNow={item.webPublicFrNow}
                  crossFrNow={item.crossFrNow}
                  uiuxDeNow={item.uiuxDeNow}
                  graphicDeNow={item.graphicDeNow}
                  thrdDeNow={item.thrdDeNow}
                  hwDeNow={item.hwDeNow}
                  etcDeNow={item.etcDeNow}
                  webBkNow={item.webBkNow}
                  blchBkNow={item.blchBkNow}
                  aiBkNow={item.aiBkNow}
                  dsBkNow={item.dsBkNow}
                  gameBkNow={item.gameBkNow}
                  planBuNow={item.planBuNow}
                  marketingBuNow={item.marketingBuNow}
                  financeBuNow={item.financeBuNow}
                  salesBuNow={item.salesBuNow}
                  consultBuNow={item.consultBuNow}
                  investBuNow={item.investBuNow}
                  etcBuNow={item.etcBuNow}
                  blogEtcNow={item.blogEtcNow}
                  influEtcNow={item.influEtcNow}
                  compEtcNow={item.compEtcNow}
                />
              ) : (
                ''
              )}
            </S.newEveBox>
          </S.suggestBottom>
        </S.suggestInfo>
      </S.suggestBox>
    </S.suggestCardContainer>
  );
};

SuggestCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
