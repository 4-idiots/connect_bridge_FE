import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './assets/custom.css';
import { Login, FindID, FindPW } from './pages/pRoutes';
import { SignupForm } from './components/cRoutes';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/findID" element={<FindID />} />
      <Route path="/login/findPW" element={<FindPW />} />
      <Route path="/sign" element={<SignupForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
