import { TableRow, TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { IExpense } from "models";
import React from "react";
import { DateUtils } from "utils/date-utils";
import { NumberUtils } from "utils/number-utils";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
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
      <StyledTableCell align="center">
        {DateUtils.toDate(expense.date)}
      </StyledTableCell>
      <StyledTableCell align="left">{expense.name}</StyledTableCell>
      <StyledTableCell align="right">
        {NumberUtils.numberWithCommas(expense.amount)}
      </StyledTableCell>
      <StyledTableCell align="right">Action</StyledTableCell>
    </StyledTableRow>
  );
};

export default ExpenseItem;
