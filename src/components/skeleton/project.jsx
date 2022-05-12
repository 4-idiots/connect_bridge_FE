import React from 'react';
import { Card, Media, Content } from 'react-bulma-components';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelProject = () => {
  return (
    <Card style={{ borderRadius: '5%' }}>
      <div>
        <Skeleton height={160} />
      </div>
      <Card.Content>
        <Media style={{ marginBottom: 0 }}>
          <Media.Item>
            <Skeleton width={60} />
            <Skeleton width={100} />
          </Media.Item>
        </Media>
        <Media style={{ marginBottom: '0.8rem' }}>
          <Content
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Skeleton width={40} />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Skeleton width={40} />
            </div>
          </Content>
        </Media>
        <S.mainRecruitWrap>
          <S.mainRecruitBox>
            <Skeleton width={80} />
          </S.mainRecruitBox>
        </S.mainRecruitWrap>
      </Card.Content>
    </Card>
  );
};
