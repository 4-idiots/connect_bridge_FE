import React from 'react';
import { render } from 'react-dom';
import customAxios from './services/customAxios';
import App from './App';
import './assets/custom.css';
import 'react-loading-skeleton/dist/skeleton.css';

const axiosHeader = localStorage.getItem('token');

customAxios.defaults.headers.common.Authorization = `Bearer ${axiosHeader}`;

const rootElement = document.getElementById('root');
render(<App />, rootElement);
