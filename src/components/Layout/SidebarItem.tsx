import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "Pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      display: "none",
    },
  },
}));

type ItemProps = {
  path: string;
  text: string;
  icon: React.ReactNode;
};

const SidebarItem: React.FC<ItemProps> = ({ path, text, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.item} key={path}>
      {/* TODO can not passing icon from map */}
      {/* <div className={classes.icon}>{icon}</div> */}
      <Typography className={classes.text}>{text}</Typography>
    </div>
  );
};

export default SidebarItem;
