import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../routes";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

interface NavProps {
  mobileOpen: boolean;
  onClose: () => void;
  onItemClick: () => void;
}

const NavBar = (props: NavProps) => {
  const classes = useStyles();
  const theme = useTheme();

  // Navbar
  const drawer = (
    <div>
      {/* Make sure this div is the first piece of content in your drawer */}
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {Routes.map((route) => (
          <ListItem
            button
            key={route.path}
            component={NavLink}
            to={route.path}
            onClick={props.onItemClick}
          >
            <ListItemText primary={route.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default NavBar;
