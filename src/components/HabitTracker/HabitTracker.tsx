import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { HabitInput } from "components/HabitTracker";
import React, { Fragment } from "react";

function HabitTracker() {
  return (
    <Fragment>
      <div className="card-header">
        <h1>Habit Tracker</h1>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Habit
        </Button>
      </div>
      <HabitInput />
    </Fragment>
  );
}

export default HabitTracker;
