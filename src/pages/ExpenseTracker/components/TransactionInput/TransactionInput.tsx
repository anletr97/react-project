import Add from '@material-ui/icons/Add';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import React from 'react';
import './test.css';

const TransactionInput = () => {
  const addTransaction = () => {};
  return (
    <>
      Add Transaction
      <ButtonIcon icon="Add" onClick={addTransaction} />
    </>
  );
};

export default TransactionInput;
