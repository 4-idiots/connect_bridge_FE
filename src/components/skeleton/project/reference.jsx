import React from 'react';
import { Block, Notification } from 'react-bulma-components';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelReference = () => {
  return (
    <S.ReferenceWrap>
      <Skeleton width={120} height={36} />
      <Block>
        <Notification style={{ height: 64, marginTop: 30 }} />
      </Block>
    </S.ReferenceWrap>
  );
};
