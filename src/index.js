import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { FindIDForm, FindPWForm, SignupForm } from './components/routes';
import './assets/custom.css';
import { Login } from './pages/login';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/findID" element={<FindIDForm />} />
      <Route path="/login/findPW" element={<FindPWForm />} />
      <Route path="/sign" element={<SignupForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
