import React from 'react';
// import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import './index.css';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import {
  LoginForm,
  FindIDForm,
  FindPWForm,
  SignupForm,
} from './components/index';
import 'bulma/css/bulma.css';
// import GlobalStyles from './reset'; // reset css
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/login/findID" element={<FindIDForm />} />
      <Route path="/login/findPW" element={<FindPWForm />} />
      <Route path="/sign" element={<SignupForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
