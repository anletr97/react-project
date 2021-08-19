import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { HabitInput } from "components/Habit";
import React from "react";

function HabitTracker() {
  return (
      <div className="card-container">
        <h1>Habit Tracker</h1>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Habit
        </Button>
        <HabitInput />
      </div>
  );
}

export default HabitTracker;
