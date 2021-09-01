import { ITransaction } from 'models';
import React from 'react';
import TransactionItem from './TransactionItem';

type ListProps = {
  transactions: ITransaction[];
  onDelete: (id?: string) => void;
};

const TransactionList: React.FC<ListProps> = (props) => {
  return (
    <ul>
      {props.transactions.map((transaction) => (
        <TransactionItem transaction={transaction} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default TransactionList;
