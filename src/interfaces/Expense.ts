interface IExpense {
  id: string;
  name: string;
  amount: number;
  date: string;
  created_at?: number;
}

export default IExpense;
