import { IUser } from './user';

export interface ITransaction {
  id: number;
  amount: number;
  user: IUser;
}
