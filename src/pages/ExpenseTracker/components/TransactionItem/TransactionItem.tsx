import { ITransaction } from 'models';
import React from 'react';
import { NumberUtils } from 'utils/number-utils';
import './transactionItem.css';

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
      {transaction.name}{' '}
      <span>{NumberUtils.numberWithCommas(transaction.amount)} VND</span>
      <button
        className={`transaction__action`}
        onClick={() => onDelete(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
