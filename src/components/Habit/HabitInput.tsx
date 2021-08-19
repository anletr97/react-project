import { Button, FormControl, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
    input: {
      height: 55,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      maxWidth: 50,
      height: 55,
    },
  })
);

const HabitInput = () => {
  const classes = useStyles();
  return (
    <div className="card-container">
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            InputProps={{
              className: classes.input,
            }}
            variant="outlined"
            label="Habit name"
            id="habitNameId"
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default HabitInput;
