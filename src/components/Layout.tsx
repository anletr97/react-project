import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
}));

const Layout = () => {
  const classes = useStyles();
  // toggle state
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerDesktop = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header onClick={handleDrawerToggle} />
        </Grid>
        <NavBar />
        <Main />
      </Grid>
    </div>
  );
};

export default Layout;
