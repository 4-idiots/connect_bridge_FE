import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Heading } from 'react-bulma-components';

export const SkelUpdate = () => {
  return (
    <Container style={{ marginTop: 80 }}>
      <Heading style={{ textAlign: 'center' }}>
        <Skeleton width={120} height={36} />
      </Heading>
      <Skeleton style={{ marginTop: 30 }} height={1200} />
    </Container>
  );
};
