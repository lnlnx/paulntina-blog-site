import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { cardBodyStyle } from '../../assets/jss/components/card/cardBodyStyle';

const useStyles = makeStyles(cardBodyStyle);

export interface CardBodyProps {
  className?: string;
  children?: React.ReactNode;
  background?: boolean;
  plain?: boolean;
  formHorizontal?: boolean;
  color?: boolean;
}

export function CardBody(props: CardBodyProps) {
  const classes = useStyles();
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    color,
    ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardBodyColor]: color,
    ...(className ? { [className]: className !== undefined } : null),
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
