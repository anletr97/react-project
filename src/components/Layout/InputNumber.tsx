import { Input, InputAdornment, InputLabel } from "@material-ui/core";
import React, { Fragment } from "react";

type InputProps = {
  id: string;
  label: string;
};

const InputNumber = (props: InputProps) => {
  return (
    <Fragment>
      <InputLabel htmlFor={props.id}>Amount</InputLabel>
      <Input
        id={props.id}
        //   value={values.amount}
        //   onChange={handleChange("amount")}
        endAdornment={<InputAdornment position="start">VND</InputAdornment>}
      />
    </Fragment>
  );
};

export default InputNumber;
