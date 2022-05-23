export const calcMem = item => {
  let need = 0;
  let now = 0;

  need =
    item.uiuxPlan +
    item.gamePlan +
    item.managerPlan +
    item.hwPlan +
    item.iosFr +
    item.androidFr +
    item.webFrontFr +
    item.webPublicFr +
    item.crossFr +
    item.graphicDe +
    item.uiuxDe +
    item.thrdDe +
    item.hwDe +
    item.etcDe +
    item.webBk +
    item.blchBk +
    item.aiBk +
    item.dsBk +
    item.gameBk +
    item.planBu +
    item.marketingBu +
    item.financeBu +
    item.salesBu +
    item.consultBu +
    item.investBu +
    item.etcBu +
    item.blogEtc +
    item.influEtc +
    item.compEtc;

  now =
    item.uiuxPlanNow +
    item.gamePlanNow +
    item.managerPlanNow +
    item.hwPlanNow +
    item.iosFrNow +
    item.androidFrNow +
    item.webFrontFrNow +
    item.webPublicFrNow +
    item.crossFrNow +
    item.graphicDeNow +
    item.uiuxDeNow +
    item.thrdDeNow +
    item.hwDeNow +
    item.etcDeNow +
    item.webBkNow +
    item.blchBkNow +
    item.aiBkNow +
    item.dsBkNow +
    item.gameBkNow +
    item.planBuNow +
    item.marketingBuNow +
    item.financeBuNow +
    item.salesBuNow +
    item.consultBuNow +
    item.investBuNow +
    item.etcBuNow +
    item.blogEtcNow +
    item.influEtcNow +
    item.compEtcNow;

  return `${now}/${need}`;
};
