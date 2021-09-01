type AddExpenseForm = (name: string, amount: number, date: string) => void;

type TransactionAddForm = (
  name: string,
  type: string,
  amount: number,
  date: string,
) => void;
