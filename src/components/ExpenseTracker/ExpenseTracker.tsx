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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      padding: 20,
      width: "100%",
      height: "100%",
    },
  })
);

const ExpenseTracker: React.FC = () => {
  const classes = useStyles();
  const [showInput, setShowInput] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    };
    fetchData();
  }, []);

  const fetchExpenses = async () => {
    let arr: any[] = [];
    await expenseApi.fetch().then((res) => {
      arr = DataUtils.deepCloneArray(res);
    });
    return arr;
  };

  const addTransaction: AddExpenseForm = (name, amount, date) => {
    // const expense: IExpense =;
    const expense = {
      id: "5",
      name,
      amount,
      date: DateUtils.strToTimeStamp(date),
      created_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
      updated_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
    };

    expenseApi.add(expense).then((res) => {
      alert("added");
    });

    setExpenses([expense, ...expenses]);
    // re-render
  };

  const deleteTransaction = (id: string) => {
    console.log("delete clicked: ", id);
  };

  return (
    <Fragment>
      <div className="card-header">
        <h1>Expense Tracker</h1>
        <Button
          text={showInput ? "Close" : "Add"}
          color={showInput ? "default" : "primary"}
          icon={showInput ? <CloseIcon /> : <AddIcon />}
          onClick={() => setShowInput(!showInput)}
        />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Fragment>
            {showInput && <ExpenseInput onAdd={addTransaction} />}
          </Fragment>
        </Grid>
        <Grid item xs={12} md={12}>
          <ExpenseList expenses={expenses} onDelete={deleteTransaction} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExpenseTracker;
