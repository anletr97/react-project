import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';
import { ICampaignSummary } from 'models';

export const service = 'charity-campaigns';
const campaignApi = {
  fetch(): Promise<[]> {
    return axiosClient.get(`${API_URL}${service}`);
  },

  getSummary(): Promise<ICampaignSummary> {
    return axiosClient.get(`${API_URL}${service}/summary`);
  },
};

export default campaignApi;
