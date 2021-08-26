import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {IExpense} from "models";
import ExpenseItem from "./ExpenseItem";
import React from "react";

type ListProps = {
  expenses: IExpense[];
};

const ExpenseList = (props: ListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Amount (VND)</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map((expense) => (
            <ExpenseItem expense={expense} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
