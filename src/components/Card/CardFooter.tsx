import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { cardFooterStyle } from '../../assets/jss/components/card/cardFooterStyle';

const useStyles = makeStyles(cardFooterStyle);

export interface CardFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export function CardFooter(props: CardFooterProps) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    ...(className ? { [className]: className !== undefined } : null),
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}
