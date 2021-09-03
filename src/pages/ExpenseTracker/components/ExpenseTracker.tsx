import {
  Grid,
  Tabs,
  Tab,
  AppBar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import transactionApi from 'api/services/transaction';
import { ITransaction } from 'models';
import React, { Fragment, useEffect, useState } from 'react';
import { DataUtils } from 'utils';

import TransactionList from './TransactionList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      margin: '0 auto',
    },
  }),
);

const ExpenseTracker: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [transactions, setTransaction] = useState<ITransaction[]>([]);

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

  // const addTransaction: AddExpenseForm = async (name, amount, date) => {
  //   // const expense: IExpense =;
  //   const transaction = {
  //     name,
  //     amount,
  //     date: DateUtils.strToTimeStamp(date),
  //     created_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
  //     updated_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
  //   };

  //   await transactionApi.add(transaction).then((res) => {
  //     setTransaction([res, ...transactions]);
  //   });

  //   // re-render
  // };

  const deleteTransaction = async (id?: string) => {
    await transactionApi.delete(id);
    setTransaction(transactions.filter((expense) => expense.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} className={classes.appBar}>
        <AppBar position="static">
          <Tabs aria-label="simple tabs example" variant="fullWidth">
            <Tab label="Daily"></Tab>
            <Tab label="This month"></Tab>
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12} md={12}>
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </Grid>
    </Grid>
  );
};

export default ExpenseTracker;
