import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { cardHeaderStyle } from '../../assets/jss/components/card/cardHeaderStyle';

const useStyles = makeStyles(cardHeaderStyle);

export enum CardHeaderColor {
  warning = 'warning',
  success = 'success',
  danger = 'danger',
  info = 'info',
  primary = 'primary',
  rose = 'rose',
}
export interface CardHeaderProps {
  className?: string;
  color?: CardHeaderColor;
  plain?: boolean;
  image?: boolean;
  contact?: boolean;
  signup?: boolean;
  noShadow?: boolean;
  children?: React.ReactNode;
}

export function CardHeader(props: CardHeaderProps) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow,
    ...rest
  } = props;
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    ...(className ? { [className]: className !== undefined } : null),
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
