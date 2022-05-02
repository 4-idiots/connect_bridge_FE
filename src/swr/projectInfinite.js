/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { ProjectCard } from '../components/ProjectPage/mainComponent/projectCard';
import { studyGetAllService } from '../service';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  if (pageIndex === 0) return studyGetAllService(0);
  return studyGetAllService(pageIndex);
};

export const ProjectInfinite = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );
  const issues = data ? [].concat(...data) : []; // 하나로 통일 하는 코드, 안쓰면 렌더링에서 map을 2번 써야 함
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && data[data.length - 1].length !== 0); // 3번쨰 조건 바꿨음
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = data ? data[data.length - 1] : [];
  const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    if (isVisible && isReachingEnd.length !== 0 && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing]);

  return (
    <>
      {isEmpty ? <p>Yay, no outdoor found.</p> : null}
      {issues &&
        issues.map(item => (
          <ProjectCard
            key={item.id}
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
            projectMotive={item.projectMotive}
            projectImg={item.projectImg}
            projectField={item.projectField}
            projectName={item.projectName}
            projectLike={item.projectLike}
            projectView={item.projectView}
            prUserID={item.userID}
            projectID={item.id}
          />
        ))}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? '' : ''}
      </div>
    </>
  );
};
