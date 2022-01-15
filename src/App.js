import React from 'react';
import * as S from './example';
import GlobalStyles from './reset'; // reset css

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <S.StyledExample>example</S.StyledExample>
    </div>
  );
}

export default App;
