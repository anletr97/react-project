import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

// Styling
const useStyles = makeStyles((theme) =>
  createStyles({
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const NavBar = () => {
  const classes = useStyles();
  const [open] = useState(true);

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
    // <Drawer className={classes.drawer} variant="permanent">
    //   <Toolbar />
    //   <div className={classes.drawerContainer}>
    //     <List>
    //       {Routes.map((route) => (
    //         <ListItem
    //           button
    //           key={route.path}
    //           component={NavLink}
    //           to={route.path}
    //           // onClick={props.onItemClick}
    //         >
    //           <ListItemText primary={route.text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // </Drawer>
  );
};

export default NavBar;
