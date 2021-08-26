type AddExpenseForm = (name: string, amount: number, date: string) => void;

type TChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;

type TFormEvent = (e: React.FormEvent<HTMLFormElement>) => void;
