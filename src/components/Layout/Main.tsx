import { Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { menuItems } from "./MenuItems";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  container: {
    marginTop: "20px",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Switch>
        {menuItems.map((item) => (
          <Route key={item.path} path={item.path}>
            <item.component />
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default Main;
