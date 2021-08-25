import React, { Fragment, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import Button from "components/Button";
import { ExpenseInput, ExpenseList } from "components/Expense";

const ExpenseTracker = () => {
  const [showInput, setShowInput] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      name: "Meal",
      amount: 30000,
      date: "20201015",
    },
    {
      id: "2",
      name: "Drink",
      amount: 30000,
      date: "20201015",
    },
    {
      id: "3",
      name: "Shopping",
      amount: 30000,
      date: "20201015",
    },
    {
      id: "4",
      name: "Meal",
      amount: 30000,
      date: "20201015",
    },
  ]);

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
