import {
  Button,
  Card,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: 20,
      height: 350,
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
    input__number: {
    },
  })
);
const ExpenseInput = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            className={classes.input__number}
            id="amount"
            //   value={values.amount}
            //   onChange={handleChange("amount")}
            endAdornment={<InputAdornment position="start">VND</InputAdornment>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField label="Category" />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2021-08-24"
            className={classes.formControl}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <Button
          className={classes.formControl}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Add
        </Button>
      </form>
    </Card>
  );
};

export default ExpenseInput;
