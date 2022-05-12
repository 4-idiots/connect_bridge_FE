import React from 'react';
import { Card, Media } from 'react-bulma-components';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelOutdoor = () => {
  return (
    <Card
      style={{
        width: 280,
        height: 500,
      }}
    >
      <S.OdCardImgBox>
        <Skeleton height="100%" />
      </S.OdCardImgBox>

      <Card.Content>
        <Media
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Media.Item style={{ height: 36, textOverflow: 'ellipsis' }}>
            <Skeleton width={230} height={26} />
          </Media.Item>
          <Media.Item style={{ marginTop: 10 }}>
            <S.OdCardUserBtndBox>
              <Skeleton style={{ marginRight: 6 }} width={80} height={30} />
              <Skeleton width={80} height={30} />
            </S.OdCardUserBtndBox>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};
