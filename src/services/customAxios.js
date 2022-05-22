import axios from 'axios';

const customAxios = axios.create({ timeout: 20000 });

export default customAxios;
