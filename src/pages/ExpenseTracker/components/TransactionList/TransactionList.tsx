import { Typography } from '@material-ui/core';
import { ITransaction } from 'models';
import React from 'react';
import { TransactionItem, TransactionInput } from 'pages/ExpenseTracker/components';
import './transactionList.css';
type ListProps = {
  transactions: ITransaction[];
  onAdd: TransactionAddForm;
  onDelete: (id?: string) => void;
};

const TransactionList: React.FC<ListProps> = (props) => {
  return (
    <div className="list__wrapper">
      <div className="list__header">
        <Typography variant="h5" component="body">
          Transactions
        </Typography>
        <TransactionInput onAdd={props.onAdd} />
      </div>
      <ul className="list__content">
        {props.transactions.map((transaction) => (
          <TransactionItem transaction={transaction} onDelete={props.onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
