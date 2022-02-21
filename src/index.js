import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './assets/custom.css';

import {
  Login,
  FindID,
  FindPW,
  Sign,
  Team,
  Teaminfo,
  OutdoorMain,
  OutdoorUpload,
  OutdoorUpdate,
} from './pages/pRoutes';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/findID" element={<FindID />} />
      <Route path="/login/findPW" element={<FindPW />} />
      <Route path="/sign" element={<Sign />} />

      <Route path="/outdoor" element={<OutdoorMain />} />
      <Route path="/outdoor/upload" element={<OutdoorUpload />} />
      <Route path="/outdoor/update/:outdoorID" element={<OutdoorUpdate />} />

      <Route path="/team" element={<Team />} />
      <Route path="/team/teaminfo" element={<Teaminfo />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
