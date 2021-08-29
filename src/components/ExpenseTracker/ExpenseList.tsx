import {
  FormControl,
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
import React, { Fragment, useState } from "react";
import { NumberUtils } from "utils/number-utils";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { DateUtils } from "utils/date-utils";

type ListProps = {
  expenses: IExpense[];
  onDelete: (id?: string) => void;
};

const ExpenseList: React.FC<ListProps> = (props) => {
  const [date, setDate] = useState<string>(DateUtils.getCurrentDateStr);
  const totalAmt = props.expenses
    .map((expense) => expense.amount)
    .reduce((total, amount) => total + amount, 0);

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setDate(DateUtils.dateToStr(date));
  };
  return (
    <Fragment>
      <FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            margin="normal"
            id="expense-date"
            label="Expense Date"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
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
              <ExpenseItem expense={expense} onDelete={props.onDelete} />
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
    </Fragment>
  );
};

export default ExpenseList;
