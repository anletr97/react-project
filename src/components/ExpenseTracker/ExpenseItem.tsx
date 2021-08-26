import { TableRow, TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { IExpense } from "models";
import React from "react";
import { DateUtils } from "utils/date-utils";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

type ItemProps = {
  expense: IExpense;
};

const ExpenseItem = ({ expense }: ItemProps) => {
  return (
    <StyledTableRow key={expense.id}>
      <StyledTableCell align="left">{expense.name}</StyledTableCell>
      <StyledTableCell align="right">{expense.amount}</StyledTableCell>
      <StyledTableCell align="center">
        {DateUtils.toDate(expense.date)}
      </StyledTableCell>
      <StyledTableCell align="right">Action</StyledTableCell>
    </StyledTableRow>
  );
};

export default ExpenseItem;
