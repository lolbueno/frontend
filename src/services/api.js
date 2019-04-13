import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistacklorenzo-backend.herokuapp.com',
});

export default api;