import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

// Styling
const useStyles = makeStyles((theme) =>
  createStyles({
    logoLg: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    logoSm: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          Online Planner
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          matmoong
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
