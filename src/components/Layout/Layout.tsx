import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // display: "flex",
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftSidebar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Main />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
