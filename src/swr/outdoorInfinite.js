/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import PropTypes from 'prop-types';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { OutdoorCardForm } from '../components/OutdoorPage/outdoorCardModule';
import { outdoorGetAllService } from '../services/outdoorService';
import { SkelOutdoor } from '../components/skeleton/outdoor';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  if (pageIndex === 0) return outdoorGetAllService(0);
  return outdoorGetAllService(pageIndex);
};

export const OutdoorInfinite = ({ outActClick }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
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
          <OutdoorCardForm
            key={item.outActID}
            item={item}
            onActClick={() => {
              outActClick(
                item.outActName,
                item.outActImg,
                item.outActLink,
                item.outActView,
                item.outActLike,
                item.outActID,
              );
            }}
            outActID={item.outActID}
          />
        ))}
      <div ref={ref}>
        {isLoadingMore ? <SkelOutdoor /> : isReachingEnd ? '' : ''}
      </div>
    </>
  );
};

OutdoorInfinite.propTypes = {
  outActClick: PropTypes.func.isRequired,
};
