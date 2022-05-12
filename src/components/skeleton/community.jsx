import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const SkelCommunity = () => {
  return (
    <div className="blog-card spring-fever">
      <div className="title-content">
        <div className="title-text">
          <Skeleton />
        </div>
        <hr />
        <div className="intro">
          <Skeleton width={120} />
        </div>
      </div>
      <div className="card-info">
        <Skeleton />
      </div>
      <div className="utility-info">
        <Skeleton width={40} />
        <Skeleton width={40} />
        <Skeleton width={40} />
      </div>
      <div className="gradient-overlay" />
      <div className="color-overlay" />
    </div>
  );
};
