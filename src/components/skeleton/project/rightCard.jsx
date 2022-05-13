import React from 'react';
import { Media, Content } from 'react-bulma-components';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

export const SkelRightCard = () => {
  return (
    <S.PageRight>
      <S.RightInfo>
        <Skeleton width={100} height={20} style={{ marginBottom: 20 }} />
        <Media>
          <Media.Item align="left">
            <Skeleton width={64} height={64} />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <p>
                <Skeleton width={80} height={20} />
                <br />
                <Skeleton width={120} height={20} />
                <br />
                <small
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Skeleton
                    width={60}
                    height={20}
                    style={{ marginRight: 20 }}
                  />
                  <Skeleton width={60} height={20} />
                </small>
              </p>
            </Content>
          </Media.Item>
        </Media>
      </S.RightInfo>
      <S.RightMid>
        <Skeleton width={160} height={20} style={{ marginBottom: 20 }} />
        <S.RightPSmall>
          <Skeleton height={20} />
        </S.RightPSmall>
      </S.RightMid>

      <S.RightMid>
        <Skeleton width={160} height={20} style={{ marginBottom: 20 }} />
        <Skeleton height={20} />
      </S.RightMid>

      <S.RightFollow>
        <Skeleton width={160} height={20} style={{ marginBottom: 20 }} />
        <Skeleton height={50} />
      </S.RightFollow>
    </S.PageRight>
  );
};
