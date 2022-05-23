import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../../../../SlateEditor/ReadOnly';

export const SuggestMid = ({ content }) => {
  return (
    <S.SuggestMid>
      <ReadOnlySlate value={content} />
    </S.SuggestMid>
  );
};

SuggestMid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
};
