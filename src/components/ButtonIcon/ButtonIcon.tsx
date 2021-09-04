import { IconButton, createStyles, makeStyles } from '@material-ui/core';
import * as icons from '@material-ui/icons';
import React from 'react';

import './buttonIcon.css';

type ButtonProps = {
  icon: keyof typeof icons;
  onClick: () => void;
};

const ButtonIcon: React.FC<ButtonProps> = (props) => {
  const Icon = icons[props.icon];
  return (
    <IconButton onClick={props.onClick} className="btn__wrapper">
      <Icon />
    </IconButton>
  );
};

export default ButtonIcon;
