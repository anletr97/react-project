import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';

export const service = 'charity-campaigns';
const campaignApi = {
  fetch(): Promise<[]> {
    return axiosClient.get(`${API_URL}${service}`);
  },
};

export default campaignApi;
