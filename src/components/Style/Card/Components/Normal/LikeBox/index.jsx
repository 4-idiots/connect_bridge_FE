import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as Heart } from '../../../../../../assets/svg/heart.svg';

export const LikeBox = ({
  onClick,
  decodedToken,
  usLike,
  onHeart,
  mouseEnter,
  mouseLeave,
}) => {
  return (
    <S.LikeBox
      onClick={onClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {decodedToken ? (
        <div>
          {usLike ? (
            <S.LikeIcon>
              <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'} />
            </S.LikeIcon>
          ) : (
            <S.LikeIcon>
              <Heart fill={onHeart ? 'rgb(211,211,211)' : 'rgb(128,128,128)'} />
            </S.LikeIcon>
          )}
        </div>
      ) : (
        ''
      )}
    </S.LikeBox>
  );
};

LikeBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  decodedToken: PropTypes.objectOf(PropTypes.any),
  usLike: PropTypes.bool.isRequired,
  onHeart: PropTypes.bool.isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};

LikeBox.defaultProps = {
  decodedToken: null,
};
