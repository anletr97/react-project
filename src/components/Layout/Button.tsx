import React from "react";
import { Button as Btn, PropTypes } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 20,
      alignContent: "center",
      justifyContent: "center",
    },
  })
);

interface ButtonProps {
  text?: string;
  color?: PropTypes.Color;
  icon?: React.ReactNode;
  width?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const _width = props.width ? props.width : "106";
  return (
    <Btn
      className={classes.root}
      variant="contained"
      style={{ width: `${_width}px` }}
      color={props.color}
      startIcon={props.icon}
      onClick={props.onClick}
    >
      {props.text}
    </Btn>
  );
};

export default Button;
