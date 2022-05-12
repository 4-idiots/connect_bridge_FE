import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const SkelTeam = () => {
  return (
    <div className="card">
      <Skeleton height="100%" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <Skeleton width={50} height={50} borderRadius="50%" />
          <div className="card__header-text">
            <Skeleton width={40} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Skeleton width={60} />
              <Skeleton />
            </div>
          </div>
        </div>
        <Skeleton />
      </div>
    </div>
  );
};
