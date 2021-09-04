import { Fab, Tooltip } from '@material-ui/core';
import * as icons from '@material-ui/icons';
import React from 'react';
import './buttonIcon.css';

type ButtonProps = {
  icon: keyof typeof icons;
  label: string;
  width?: number;
  color?: string;
  onClick: () => void;
};

const ButtonIcon: React.FC<ButtonProps> = (props) => {
  const Icon = icons[props.icon];
  const _width = props.width ? props.width.toString() + 'px' : '34px';
  const _color = props.color ? props.color : '';
  return (
    <div onClick={props.onClick}>
      <Tooltip
        title={props.label}
        aria-label={props.label}
        style={{ width: _width, backgroundColor: _color }}
      >
        <Fab size="small" variant="extended" className="btn__icon" color="primary">
          <Icon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default ButtonIcon;
