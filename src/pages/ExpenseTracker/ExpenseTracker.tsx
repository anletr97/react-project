import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import transactionApi from 'api/services/transaction';
import { ITransaction } from 'models';
import React, { useEffect, useState } from 'react';
import { DataUtils, DateUtils } from 'utils';
import { Toast } from 'components';
import { TransactionList, TransactionSumary } from './components';
import { MESSAGE } from 'utils/constants';
import { useToast } from 'utils/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      margin: '0 auto',
    },
  }),
);

const ExpenseTracker: React.FC = () => {
  const classes = useStyles();
  const { messageObj, toastSuccess, toastError } = useToast();
  const [transactions, setTransaction] = useState<ITransaction[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const transaction = await fetchTransactions();
      setTransaction(transaction);
    };
    fetchData();
  }, []);

  /**
   * Fetch expense to display
   */
  const fetchTransactions = async () => {
    let arr: any[] = [];
    await transactionApi.fetch().then((res) => {
      arr = DataUtils.deepCloneArray(res);
    });
    return arr;
  };

  /**
   *
   * @param name
   * @param type
   * @param amount
   * @param date
   */
  const addTransaction: TransactionAddForm = async (name, type, amount, date) => {
    // const expense: IExpense =;
    const transaction = {
      name,
      amount,
      type,
      date: DateUtils.strToTimeStamp(date),
      created_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
      updated_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
    };

    await transactionApi.add(transaction).then((res) => {
      if (res) {
        setTransaction([res, ...transactions]);
        toastSuccess(MESSAGE.ADD_SUCCESS);
      } else {
        toastError(MESSAGE.ADD_ERROR);
      }
    });

    // re-render
  };

  const deleteTransaction = async (id?: string) => {
    await transactionApi.delete(id);
    setTransaction(transactions.filter((expense) => expense.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12} className={classes.appBar}>
        <TransactionSumary />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onAdd={addTransaction}
        />
        <Toast
          message_type={messageObj.message_type}
          title={messageObj.title}
          message={messageObj.message}
          open={messageObj.open}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        Shedule payment list goes here
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onAdd={addTransaction}
        />
      </Grid>
    </Grid>
  );
};

export default ExpenseTracker;
