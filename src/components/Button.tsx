import React from "react";
import { Button as Btn, PropTypes } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

interface ButtonProps {
  text: string;
  color: PropTypes.Color;
  icon: React.ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Btn
      variant="contained"
      style={{ minWidth: "106px" }}
      color={props.color}
      startIcon={props.icon}
      onClick={props.onClick}
    >
      {props.text}
    </Btn>
  );
};

export default Button;
