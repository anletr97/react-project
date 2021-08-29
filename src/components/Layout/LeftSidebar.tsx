import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import SidebarItem from "./SidebarItem";
import { Routes } from "../../routes";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
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

const LeftSidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {Routes.map((route) => (
        <SidebarItem path={route.path} text={route.text} icon={route.icon} />
      ))}
    </Container>
  );
};

export default LeftSidebar;
