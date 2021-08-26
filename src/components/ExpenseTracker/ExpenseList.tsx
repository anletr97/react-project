import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { IExpense } from "models";
import ExpenseItem from "./ExpenseItem";
import React from "react";
import { NumberUtils } from "utils/number-utils";

type ListProps = {
  expenses: IExpense[];
};

const ExpenseList = (props: ListProps) => {
  const totalAmt = props.expenses
    .map((expense) => expense.amount)
    .reduce((total, amount) => total + amount, 0);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Amount (VND)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map((expense) => (
            <ExpenseItem expense={expense} />
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2} className="expense__total">
              Total
            </TableCell>
            <TableCell align="right" className="expense__total">
              {NumberUtils.numberWithCommas(totalAmt)}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
