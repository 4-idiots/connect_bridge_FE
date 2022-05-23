import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const CardContainer = ({
  children,
  mouseEnter,
  mouseLeave,
  isHover,
}) => {
  return (
    <S.CustomCard
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
            }
          : {}
      }
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {children}
    </S.CustomCard>
  );
};

CardContainer.propTypes = {
  isHover: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};
