import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';
import { IAuth } from 'models/auth';

export const service = 'auth';
const authApi = {
  login(body: IAuth): Promise<any> {
    return axiosClient.post(`${API_URL}${service}/login`, body);
  },
};

export default authApi;
