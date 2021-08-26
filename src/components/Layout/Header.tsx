import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    // Make the app bar z-index always one more than the drawer z-index
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Online Planner
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
