import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';

export const DetailContent = ({ value }) => {
  return (
    <S.DetailContent>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        소개
      </Heading>
      <ReadOnlySlate value={value} />
    </S.DetailContent>
  );
};

DetailContent.propTypes = {
  value: PropTypes.arrayOf(PropTypes.any).isRequired,
};
