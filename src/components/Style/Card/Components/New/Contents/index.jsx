import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../../../../SlateEditor/ReadOnly';

export const NewContents = ({ contents }) => {
  return (
    <S.NewContent>
      <ReadOnlySlate value={contents} />
    </S.NewContent>
  );
};

NewContents.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any).isRequired,
};
