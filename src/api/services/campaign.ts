import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';
import { ICampaign, ICampaignSummary } from 'models';

export const service = 'charity-campaigns';
const campaignApi = {
  fetch(): Promise<[]> {
    return axiosClient.get(`${API_URL}${service}`);
  },

  getSummary(): Promise<ICampaignSummary> {
    return axiosClient.get(`${API_URL}${service}/summary`);
  },

  getCampaignById(id: number): Promise<ICampaign> {
    return axiosClient.get(`${API_URL}${service}/${id}`);
  },
};

export default campaignApi;
