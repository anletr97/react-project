import { Button, FormControl, TextField, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      padding: 20,
      height: 240,
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
  })
);

const HabitInput = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <TextField variant="outlined" label="Habit Name" id="habitNameId" />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField variant="outlined" label="Motivation" id="habitNameId" />
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

export default HabitInput;
