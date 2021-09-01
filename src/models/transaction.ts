export interface ITransaction {
  id?: string;
  name: string;
  amount: number;
  date: number;
  type: string | 'expense' | 'income';
  created_at?: number;
  updated_at?: number;
}

export default ITransaction;
