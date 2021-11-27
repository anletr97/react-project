export interface ICampaignSummary {
  total_charity_campaign: number;
  total_people_supported: number;
  total_amount: number;
}

export const defautlCampaignSummary: ICampaignSummary = {
  total_charity_campaign: 0,
  total_people_supported: 0,
  total_amount: 0,
};
