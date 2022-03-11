/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import PropTypes from 'prop-types';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { OutdoorCardForm } from '../components/OutdoorPage/outdoorCardModule';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.content) return null;

  return `https://e84d5124-7e2a-45dd-81f6-f578fed64192.mock.pstmn.io/outdoor-get-all/${
    pageIndex + 1
  }`;
};

export const OutdoorInfinite = ({ outActClick }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );
  const issues = data || [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = size === 9;
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
          )),
        )}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more issues' : ''}
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
