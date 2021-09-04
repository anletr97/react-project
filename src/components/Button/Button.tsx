import { Button as Btn } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 55,
      alignItems: 'center',
      width: '100%',
    },
  }),
);

interface ButtonProps {
  label?: string;
  color?: string;
  icon?: React.ReactNode;
  width?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Btn
      className={classes.root}
      variant="contained"
      style={{ backgroundColor: props.color ? props.color : '' }}
      size="large"
      startIcon={props.icon}
      onClick={props.onClick}
    >
      {props.label}
    </Btn>
  );
};

export default Button;
