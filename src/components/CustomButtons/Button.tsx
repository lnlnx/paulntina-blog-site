import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { Modify } from '../../utils/types';

// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button, { ButtonProps } from '@material-ui/core/Button';

// core components
import { buttonStyle } from '../../assets/jss/components/buttonStyle';

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

export enum ButtonColor {
  primary = 'primary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  rose = 'rose',
  white = 'white',
  facebook = 'facebook',
  twitter = 'twitter',
  google = 'google',
  github = 'github',
  transparent = 'transparent',
}

export enum ButtonSize {
  small = 'sm',
  large = 'lg',
}

export interface RegularButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const RegularButton: React.FC<Modify<
  ButtonProps,
  RegularButtonProps
>> = (props: Modify<ButtonProps, RegularButtonProps>) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size!]]: size,
    [classes[color!]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className!]: className,
  });
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
};
