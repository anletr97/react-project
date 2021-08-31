import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import expenseApi from "api/expenseApi";
import Button from "components/Layout/Button";
import { IExpense } from "models";
import React, { Fragment, useEffect, useState } from "react";
import { DataUtils } from "utils";
import { DateUtils } from "utils/date-utils";
import ExpenseInput from "./ExpenseInput";
import ExpenseList from "./ExpenseList";

const ExpenseTracker: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    };
    fetchData();
  }, []);

  /**
   * Fetch expense to display
   */
  const fetchExpenses = async () => {
    let arr: any[] = [];
    await expenseApi.fetch().then((res) => {
      arr = DataUtils.deepCloneArray(res);
    });
    return arr;
  };

  const addTransaction: AddExpenseForm = async (name, amount, date) => {
    // const expense: IExpense =;
    const expense = {
      name,
      amount,
      date: DateUtils.strToTimeStamp(date),
      created_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
      updated_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
    };

    await expenseApi.add(expense).then((res) => {
      setExpenses([res, ...expenses]);
    });

    // re-render
  };

  const deleteTransaction = async (id?: string) => {
    await expenseApi.delete(id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <ExpenseInput onAdd={addTransaction} />
      </Grid>
      <Grid item xs={12} md={12}>
        <ExpenseList expenses={expenses} onDelete={deleteTransaction} />
      </Grid>
    </Grid>
  );
};

export default ExpenseTracker;
