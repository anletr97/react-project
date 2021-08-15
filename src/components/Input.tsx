import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const Input = () => {
  return (
    <div>
      <TextField
        id="filled-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
    </div>
  );
};

export default Input;
