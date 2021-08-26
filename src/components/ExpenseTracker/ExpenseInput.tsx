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
import { IExpense } from "models";
import React, { useState } from "react";
import { DateUtils } from "utils/date-utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: 20,
      height: 250,
      marginBottom: 20,
    },
    form: {
      width: "100%",
      paddingRight: 10,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
  const [date, setDate] = useState<string>(DateUtils.getNow());
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const onSubmit: TFormEvent = (e) => {
    e.preventDefault();

    onAdd(name, amount, date);

    // setDate(""); //set date = today
    // setName("");
    setAmount(0);
  };

  const currentDate = DateUtils.getNow();
  console.log(
    "🚀 ~ file: ExpenseInput.tsx ~ line 59 ~ currentDate",
    currentDate
  );

  const handleNameChange: TChangeEvent = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange: TChangeEvent = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleDateChange: TChangeEvent = (e) => {
    setDate(e.target.value);
  };

  return (
    <Card className={classes.cardContainer}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl
              className={classes.formControl}
              required={true}
              size="small"
            >
              <TextField
                required={true}
                id="date"
                label="Date"
                type="date"
                value={date}
                defaultValue={currentDate}
                onChange={handleDateChange}
                className={classes.formControl}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl
              className={classes.formControl}
              required={true}
              size="small"
            >
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
                endAdornment={
                  <InputAdornment position="start">VND</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
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
      </form>
    </Card>
  );
};

export default ExpenseInput;
