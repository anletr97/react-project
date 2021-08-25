import { Button, Container } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import React, { Fragment } from "react";

import ExpenseInput from "components/Expense/ExpenseInput";

const ExpenseTracker = () => {
  return (
    <Fragment>
      <div className="card-header">
        <h1>Expense Tracker</h1>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Habit
        </Button>
      </div>
      <ExpenseInput />
    </Fragment>
  );
};

export default ExpenseTracker;
