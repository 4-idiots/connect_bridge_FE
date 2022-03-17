import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import App from './App';
import './assets/custom.css';

const axiosHeader = localStorage.getItem('token');

axios.defaults.headers.common.Authorization = `Bearer ${axiosHeader}`;

const rootElement = document.getElementById('root');
render(<App />, rootElement);
