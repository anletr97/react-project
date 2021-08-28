import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Routes } from "routes";

const drawerWidth = 240;
// Styling
const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerContainer: {
      overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
  })
);

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Drawer className={classes.drawer} variant="permanent">
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {Routes.map((route) => (
            <ListItem
              button
              key={route.path}
              component={NavLink}
              to={route.path}
              // onClick={props.onItemClick}
            >
              <ListItemText primary={route.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavBar;
