import './Transaction.css';

import { ITransaction } from 'models';
import React, { Fragment } from 'react';

type ItemProps = {
  transaction: ITransaction;
  onDelete: (id?: string) => void;
};

const TransactionItem: React.FC<ItemProps> = ({ transaction, onDelete }) => {
  const typeExpense = 'expense';
  const classes =
    transaction.type === typeExpense
      ? 'transaction__container-expense'
      : 'transaction__container-income';

  return (
    <li className={`transaction__container ${classes}`}>
      {transaction.name} <span>{transaction.amount} VND</span>
      <button className={`transaction__action`}>x</button>
    </li>
  );
};

export default TransactionItem;
