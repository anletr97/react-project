import { Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "routes";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  container: {
    left: "20px",
    marginTop: "50px",
    paddingTop: "20px",
    maxWidth: "917px",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Switch>
        {Routes.map((route) => (
          <Route key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default Main;
