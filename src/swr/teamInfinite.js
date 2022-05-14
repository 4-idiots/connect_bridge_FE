/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { TeamCard } from '../components/TeamPage/teamCard';
import { SkelTeam } from '../components/skeleton/skelRouter';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  if (pageIndex === 0) return `/api/team${0}`;

  return `/api/team${pageIndex}`;
};

export const TeamInfinite = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );
  const issues = data ? [].concat(...data) : [];
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
      {isEmpty ? <p>Yay, no team found.</p> : null}
      {issues && issues.map(item => <TeamCard key={item.myid} item={item} />)}
      <div ref={ref}>
        {isLoadingMore ? <SkelTeam /> : isReachingEnd ? '' : ''}
      </div>
    </>
  );
};
