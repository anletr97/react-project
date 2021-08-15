import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Input from "../../components/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ExpenseTracker = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Input />
    </Container>
  );
};

export default ExpenseTracker;
