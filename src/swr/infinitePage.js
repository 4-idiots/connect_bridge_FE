/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { OutdoorCardForm } from '../components/OutdoorPage/outdoorCardModule';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.content) return null;

  return `https://e84d5124-7e2a-45dd-81f6-f578fed64192.mock.pstmn.io/outdoor-get-all/${
    pageIndex + 1
  }`;
};

export const InfinitePage = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args),
    fetcher,
  );
  const issues = data || [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = size === 6;
  const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing]);

  return (
    <>
      {issues &&
        issues.map(info =>
          info.content.map(item => (
            <OutdoorCardForm
              key={item.outActID}
              outActLike={item.outActLike}
              outActName={item.outActName}
              outActView={item.outActView}
              outActImg={item.outActImg}
              onActClick={() => {
                console.log('hi');
              }}
              outActID={item.outActID}
            />
          )),
        )}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more issues' : ''}
      </div>
    </>
  );
};
