export interface IExpense {
  id?: string;
  name: string;
  amount: number;
  date: number;
  created_at?: number;
  updated_at?: number;
}

export default IExpense;
