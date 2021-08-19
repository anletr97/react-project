import { Container,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import React from "react";

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
    </Container>
  );
};

export default ExpenseTracker;
