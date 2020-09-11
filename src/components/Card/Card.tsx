import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import { cardStyle } from '../../assets/jss/components/card/cardStyle';

const useStyles = makeStyles(cardStyle);

export enum CardColor {
  primary = 'primary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  rose = 'rose',
}

export interface CardProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  plain?: boolean;
  profile?: boolean;
  blog?: boolean;
  raised?: boolean;
  background?: boolean;
  pricing?: boolean;
  carousel?: boolean;
  color?: CardColor;
  product?: boolean;
  testimonial?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    ...rest
  } = props;
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    ...(color ? { [classes[color]]: color } : null),
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    ...(className ? { [className]: className !== undefined } : null),
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
