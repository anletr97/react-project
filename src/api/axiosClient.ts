import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (conf) => {
  //hanlde exception here
  //..
  return conf;
});

axiosClient.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

export default axiosClient;
