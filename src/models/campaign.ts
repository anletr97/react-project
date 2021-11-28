export interface ICampaign {
  id: number;
  name: string;
  content: string;
  description: string;
  target_amount_of_money: number | 0;
  current_amount_of_money: number | 0;
  end_date: number;
  created_date: number;
  current_percent_of_donation: number | 0;
  current_numbers_of_donation: number | 0;
  images: string[];
}