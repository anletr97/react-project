import { Typography } from '@material-ui/core';
import { ITransaction } from 'models';
import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';

type ListProps = {
  transactions: ITransaction[];
  onDelete: (id?: string) => void;
};

const TransactionList: React.FC<ListProps> = (props) => {
  return (
    <>
      <Typography variant="h5" component="body">
        Transactions
      </Typography>
      <ul>
        {props.transactions.map((transaction) => (
          <TransactionItem transaction={transaction} onDelete={props.onDelete} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
