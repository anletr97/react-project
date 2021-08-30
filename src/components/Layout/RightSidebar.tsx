import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  item: {},
  text: {},
}));

const RightSidebar: React.FC = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Right bar</Container>;
};

export default RightSidebar;
