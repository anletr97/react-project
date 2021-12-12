import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';
import { IAuth, IAuthRegister } from 'models/auth';

export const URL = `${API_URL}auth`;
const authApi = {
  login(body: IAuth): Promise<any> {
    return axiosClient.post(`${URL}/login`, body);
  },

  register(body: IAuthRegister): Promise<any> {
    return axiosClient.post(`${URL}/register`, body);
  },
};

export default authApi;
