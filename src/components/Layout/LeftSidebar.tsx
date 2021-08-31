import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as icons from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { menuItems } from "./MenuItems";

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
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      display: "none",
    },
  },
}));

const LeftSidebar: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (path: string) => history.push(path);

  const list = menuItems.map((item) => {
    const Icon = icons[item.icon];
    return (
      <div
        className={classes.item}
        key={item.path}
        onClick={() => handleClick(item.path)}
      >
        <Icon className={classes.icon} />
        <Typography className={classes.text}>{item.text}</Typography>
      </div>
    );
  });

  return (
    <Container className={classes.container}>
      <div>{list}</div>
    </Container>
  );
};

export default LeftSidebar;
