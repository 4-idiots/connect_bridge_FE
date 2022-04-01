/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import PropTypes from 'prop-types';
import fetcher from './fetcher';
import useOnScreen from './useOnScreen';
import { TeamCardForm } from '../components/TeamPage/cardTeam';
import { teamGetAllService } from '../service';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  if (pageIndex === 0) return teamGetAllService(0);

  return teamGetAllService(pageIndex);
};

export const TeamInfinite = ({ outActClick }) => {
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
          <TeamCardForm
            key={item.myid}
            userNickname={item.userNickname}
            userAbility={item.userAbility}
            userInterest={item.userInterest}
            userPicture={item.userPicture}
            userLike={item.userLike}
            onActClick={() => {
              outActClick(
                item.userNickname,
                item.userAbility,
                item.userInterest,
                item.userPicture,
                item.userLike,
                item.myid,
              );
            }}
            myid={item.myid}
          />
        ))}
      <div ref={ref}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more' : ''}
      </div>
    </>
  );
};

TeamInfinite.defaultProps = {
  outActClick: (name, img, Ability, Interest, like, myid) => {
    console.log(name, img, Ability, Interest, like, myid);
  },
};

TeamInfinite.propTypes = {
  outActClick: PropTypes.func,
};
