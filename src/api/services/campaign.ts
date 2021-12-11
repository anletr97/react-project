import axiosClient from 'api/axiosClient';
import API_URL from 'common/constant';
import { ICampaign, ICampaignSummary, IDonateBody, ITransaction } from 'models';
import { getToken } from 'utils';

export const URL = `${API_URL}charity-campaigns`;
const campaignApi = {
  fetch(): Promise<[]> {
    return axiosClient.get(URL);
  },

  getSummary(): Promise<ICampaignSummary> {
    return axiosClient.get(`${URL}/summary`);
  },

  getCampaignById(id?: number): Promise<ICampaign> {
    return axiosClient.get(`${URL}/${id}`);
  },

  getTransactionsById(id?: number): Promise<ITransaction[]> {
    return axiosClient.get(`${URL}/${id}/transactions`);
  },

  donateToCampaignId(body: IDonateBody, id?: number): Promise<any> {
    const url = `${URL}/${id}/donate`;
    console.log(url, getToken());

    return axiosClient.post(url, body, {
      headers: {
        Authorization: getToken(),
      },
    });
  },
};

export default campaignApi;
