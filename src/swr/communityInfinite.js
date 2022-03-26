/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import PropTypes from 'prop-types';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { CommunityCardForm } from '../components/CommunityPage/cardCommunity';
import { communityGetAllService } from '../service';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  if (pageIndex === 0) return communityGetAllService(0);

  return communityGetAllService(pageIndex);
};

export const CommunityInfinite = ({ outActClick }) => {
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
      {isEmpty ? <p>Yay, no team found.</p> : null}
      {issues &&
        issues.map(item => (
          <CommunityCardForm
            key={item.postID}
            title={item.title}
            userNickname={item.userNickname}
            viewCount={item.viewCount}
            likeCount={item.likeCount}
            commentCount={item.commentCount}
            onActClick={() => {
              outActClick(
                item.title,
                item.userNickname,
                item.viewCount,
                item.likeCount,
                item.commentCount,
                item.postID,
              );
            }}
            id={item.postID}
          />
        ))}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more' : ''}
      </div>
    </>
  );
};

CommunityInfinite.defaultProps = {
  outActClick: (name, img, Ability, Interest, like, id) => {
    console.log(name, img, Ability, Interest, like, id);
  },
};

CommunityInfinite.propTypes = {
  outActClick: PropTypes.func,
};
