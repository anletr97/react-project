import {
  Button,
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState, FocusEventHandler } from "react";
import { DateUtils } from "utils/date-utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: 20,
      // height: 350,
      marginBottom: 20,
    },
    form: {
      width: "100%",
      paddingRight: 10,
    },
    formControl: {
      minWidth: 120,
      marginBottom: 20,
      width: "100%",
    },
    input__number: {},
  })
);

type InputProps = {
  onAdd: AddExpenseForm;
};

const ExpenseInput: React.FC<InputProps> = ({ onAdd }) => {
  const classes = useStyles();
  const [date, setDate] = useState<string>(DateUtils.getCurrentDateStr());
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const onSubmit: TFormEvent = (e) => {
    e.preventDefault();

    onAdd(name, amount, date);
    setName("");
    setAmount(0);
  };

  const handleNameChange: TChangeEvent = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange: TChangeEvent = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setDate(DateUtils.dateToStr(date));
  };

  const handleAddCommas = (
    e: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmount(parseInt(parseInt(e.toString()).toLocaleString("en")));
  };

  return (
    <Card className={classes.cardContainer}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl className={classes.formControl} required={true} size="small">
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
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl} required={true} size="small">
              <TextField
                label="Category"
                required={true}
                value={name}
                onChange={handleNameChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl} required={true}>
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input
                required={true}
                id="amount"
                value={amount}
                //   onChange={handleChange("amount")}
                onChange={handleAmountChange}
                endAdornment={<InputAdornment position="start">VND</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              className={classes.formControl}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default ExpenseInput;
