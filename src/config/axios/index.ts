import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://banqi-pj-challenge.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
