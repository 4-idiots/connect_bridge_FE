import React from 'react';
import { Tabs } from 'react-bulma-components';
import Skeleton from 'react-loading-skeleton';

export const SkelTabs = () => {
  return (
    <Tabs size="medium" type="boxed" style={{ marginBottom: 60 }}>
      <Tabs.Tab active>
        <Skeleton width={40} />
      </Tabs.Tab>
      <Tabs.Tab>
        <Skeleton width={40} />
      </Tabs.Tab>
      <Tabs.Tab>
        <Skeleton width={40} />
      </Tabs.Tab>
      <Tabs.Tab>
        <Skeleton width={40} />
      </Tabs.Tab>
    </Tabs>
  );
};
