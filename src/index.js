import React from 'react';
import { render } from 'react-dom';
import { customAxios } from './service';
import App from './App';
import './assets/custom.css';

const axiosHeader = localStorage.getItem('token');

customAxios.defaults.headers.common.Authorization = `Bearer ${axiosHeader}`;

const rootElement = document.getElementById('root');
render(<App />, rootElement);
