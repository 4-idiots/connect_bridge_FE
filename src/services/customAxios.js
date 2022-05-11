import axios from 'axios';

const customAxios = axios.create({ timeout: 10000 });

export default customAxios;
