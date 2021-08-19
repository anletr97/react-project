import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    // Make the app bar z-index always one more than the drawer z-index
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
      <AppBar position="relative" className={classes.appBar}>
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
