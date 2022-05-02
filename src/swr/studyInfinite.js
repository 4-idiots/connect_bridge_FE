/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { StudyCard } from '../components/StudyPage/mainComponent/studyCard';
import { studyGetAllService } from '../service';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  if (pageIndex === 0) return studyGetAllService(0);
  return studyGetAllService(pageIndex);
};

export const StudyInfinite = () => {
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
          <StudyCard
            key={item.id}
            studyField={item.studyField}
            studyName={item.studyName}
            studyLike={item.studyLike}
            studyView={item.studyView}
            stUserID={item.userID}
            studyID={item.studyID}
          />
        ))}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? '' : ''}
      </div>
    </>
  );
};
