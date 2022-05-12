import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from './pages/pRoutes';
import { AuthContext } from './contexts/store/auth';
import { useProvideAuth } from './contexts/hooks/useProvideAuth';

const App = () => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Main />} />
          <Route path="/login" element={<P.Login />} />
          <Route path="/login/findID" element={<P.FindID />} />
          <Route path="/login/findPW" element={<P.FindPW />} />
          <Route path="/sign" element={<P.Sign />} />
          <Route path="/outdoor" element={<P.OutdoorMain />} />
          <Route path="/outdoor/upload" element={<P.OutdoorUpload />} />
          <Route
            path="/outdoor/update/:outdoorID"
            element={<P.OutdoorUpdate />}
          />
          <Route path="/team" element={<P.Team />} />
          <Route path="/team/info/:teamID" element={<P.Info />} />
          <Route path="/study" element={<P.StudyMain />} />
          <Route path="/study/update/:studyID" element={<P.StudyUpdate />} />
          <Route path="/study/:studyID" element={<P.StudyDetail />} />
          <Route path="/project" element={<P.ProjectMain />} />
          <Route path="/project/:projectID" element={<P.ProjectDetail />} />
          <Route path="/project/upload" element={<P.ProjectUpload />} />
          <Route
            path="/project/update/:projectID"
            element={<P.ProjectUpdate />}
          />
          <Route path="/community" element={<P.Community />} />
          <Route path="/community/popular" element={<P.CommunityP />} />
          <Route path="/serach/:query" element={<P.Communityserach />} />
          <Route path="/community/write" element={<P.CommunityWrite />} />
          <Route
            path="/community/change/:communityID"
            element={<P.CommunityChange />}
          />
          <Route
            path="/community/info/:communityID"
            element={<P.CommunityInfo />}
          />
          <Route path="/my/info" element={<P.MyPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
