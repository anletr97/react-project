import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Routes } from "../routes";

const Main = () => {
  return (
    <Container>
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
