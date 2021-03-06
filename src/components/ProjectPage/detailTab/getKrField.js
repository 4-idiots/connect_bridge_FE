const fieldObject = {
  uiux_plan: 'UI/UX 기획',
  game_plan: '게임 기획',
  manager_plan: '프로젝트 매니저',
  hwPlan: '하드웨어(제품) 기획',
  ios_fr: 'IOS',
  android_fr: '안드로이드',
  webfront_fr: '웹프론트엔드',
  webPublic_fr: '웹퍼블리셔',
  cross_fr: '크로스플랫폼',
  uiux_de: 'UI/UX디자인',
  graphic_de: '그래픽디자인',
  thrd_de: '3D디자인',
  hw_de: '하드웨어(제품)디자인',
  etc_de: '(디자인)기타',
  web_bk: '웹서버',
  blch_bk: '블록체인',
  ai_bk: 'AI',
  ds_bk: 'DB/빅데이터/DS',
  game_bk: '게임서버',
  plan_bu: '사업기획',
  marketing_bu: '마케팅',
  finance_bu: '재무/회계',
  sales_bu: '영업',
  consult_bu: '전략/컨설팅',
  invest_bu: '투자/고문',
  etc_bu: '(사업)그외',
  blog_etc: '작가/블로거',
  influ_etc: '인플루언서/유튜버',
  comp_etc: '작곡(사운드)',
};

export const getKrField = text => {
  return fieldObject[text];
};
