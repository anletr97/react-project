import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import Main from './Main';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // display: "flex",
  },
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Main />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
