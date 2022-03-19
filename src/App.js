import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  FindID,
  FindPW,
  Sign,
  OutdoorMain,
  OutdoorUpload,
  OutdoorUpdate,
  Team,
  ProjectUpload,
  Main,
  Info,
} from './pages/pRoutes';
import { AuthContext } from './contexts/store/auth';
import { useProvideAuth } from './contexts/hooks/useProvideAuth';

const App = () => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/findID" element={<FindID />} />
          <Route path="/login/findPW" element={<FindPW />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/outdoor" element={<OutdoorMain />} />
          <Route path="/outdoor/upload" element={<OutdoorUpload />} />
          <Route
            path="/outdoor/update/:outdoorID"
            element={<OutdoorUpdate />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/team/info/:teamID" element={<Info />} />
          <Route path="/project/upload" element={<ProjectUpload />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
