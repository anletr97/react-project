import React, { Fragment, useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import Button from "components/Button";
import ExpenseInput from "./ExpenseInput";
import ExpenseList from "./ExpenseList";
import { IExpense } from "models";
import expenseApi from "api/expense.api";
import { DataUtils } from "utils";

const ExpenseTracker = () => {
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
      <Fragment>{showInput && <ExpenseInput />}</Fragment>
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
};

export default ExpenseTracker;
