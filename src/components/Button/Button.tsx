import { Button as Btn, PropTypes } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import * as icons from '@material-ui/icons';
import './button.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 55,
      height: 55,
      alignItems: 'center',
    },
  }),
);

interface ButtonProps {
  label?: string;
  color?: PropTypes.Color;
  icon?: React.ReactNode;
  width?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  const _width = props.width ? props.width + 'px' : '106px';
  return (
    // <div className="btn__wrapper">
    //   {props.label}
    //   <Icon className="btn__icon" />
    // </div>

    <Btn
      className={classes.root}
      variant="contained"
      style={{ width: `${_width}` }}
      color={props.color}
      startIcon={props.icon}
      onClick={props.onClick}>
      {props.label}
    </Btn>
  );
};

export default Button;
