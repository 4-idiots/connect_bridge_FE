/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import PropTypes from 'prop-types';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { OutdoorCardForm } from '../components/OutdoorPage/outdoorCardModule';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  return `http://localhost:4000/cursor${pageIndex + 1}`;
};

export const OutdoorInfinite = ({ outActClick }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );
  const issues = data ? [].concat(...data) : []; // 이게 대박 하나로 통일 하는 코드, 안쓰면 렌더링에서 map을 2번 써야 함
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
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues &&
        issues.map(item => (
          <OutdoorCardForm
            key={item.outActID}
            outActLike={item.outActLike}
            outActName={item.outActName}
            outActView={item.outActView}
            outActImg={item.outActImg}
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
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more' : ''}
      </div>
    </>
  );
};

OutdoorInfinite.defaultProps = {
  outActClick: (name, img, link, view, like, id) => {
    console.log(name, img, link, view, like, id);
  },
};

OutdoorInfinite.propTypes = {
  outActClick: PropTypes.func,
};
