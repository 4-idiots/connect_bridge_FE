import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Block, Notification } from 'react-bulma-components';
import * as S from './style';

export const DetailReference = ({ projectReference }) => {
  return (
    <S.ReferenceWrap>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        참고 링크
      </Heading>
      <Block>
        <Notification style={{ cursor: 'pointer' }}>
          <a href={projectReference} style={{ textDecoration: 'none' }}>
            {projectReference}
          </a>
        </Notification>
      </Block>
    </S.ReferenceWrap>
  );
};

DetailReference.propTypes = {
  projectReference: PropTypes.string.isRequired,
};
