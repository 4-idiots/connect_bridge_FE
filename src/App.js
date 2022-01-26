/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Columns, Notification, Box } from 'react-bulma-components';

const App = () => {
  return (
    <div className="App">
      <Notification
        style={{
          marginBottom: '1.5rem',
        }}
      >
        with <b>breakpoint</b> the columns will be active on all sizes equal or
        greater than the breakpoint
      </Notification>
      <Box>
        <Columns breakpoint="tablet">
          <Columns.Column
            desktop={{
              narrow: false,
              offset: 4,
              size: 4,
            }}
            fullhd={{
              narrow: false,
              offset: 0,
              size: 3,
            }}
            mobile={{
              narrow: false,
              offset: 2,
              size: 8,
              textAlign: 'center',
              textSize: 3,
            }}
            tablet={{
              narrow: false,
              offset: 3,
              size: 6,
            }}
            widescreen={{
              narrow: false,
              offset: 5,
              size: 2,
            }}
          >
            <Notification color="primary">
              <p>I'm responsive</p>
            </Notification>
          </Columns.Column>
          <Columns.Column>
            <Notification color="info">Auto</Notification>
          </Columns.Column>
        </Columns>
      </Box>
    </div>
  );
};

export default App;
