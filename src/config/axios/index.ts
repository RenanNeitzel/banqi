import axios, {AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.baseURL = 'https://banqi-pj-challenge.herokuapp.com/';
  config.headers = {
    'Content-type': 'application/json',
  };

  return config;
});

export default axiosInstance;
