import { TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { IExpense } from "models";
import React from "react";
import { DateUtils } from "utils/date-utils";
import { NumberUtils } from "utils/number-utils";
import CloseIcon from "@material-ui/icons/Close";
import Button from "components/Layout/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
    // alignItems: "center",
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
  onDelete: (id?: string) => void;
};

const ExpenseItem: React.FC<ItemProps> = (props) => {
  return (
    <StyledTableRow key={props.expense.id}>
      <StyledTableCell align="center">
        {DateUtils.timestampToDateStr(props.expense.date)}
      </StyledTableCell>
      <StyledTableCell align="left">{props.expense.name}</StyledTableCell>
      <StyledTableCell align="right">
        {NumberUtils.numberWithCommas(props.expense.amount)}
      </StyledTableCell>
      <StyledTableCell align="right" width={120}>
        <Button
          color="secondary"
          icon={<CloseIcon />}
          text="delete"
          // width="20"
          onClick={() => props.onDelete(props.expense.id)}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ExpenseItem;
