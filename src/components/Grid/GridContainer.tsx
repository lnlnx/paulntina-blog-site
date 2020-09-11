import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { Modify } from '../../utils/types';

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
};

const useStyles = makeStyles(styles);

export interface GridContainerProps {
  children?: React.ReactNode;
  className: string;
}

export function GridContainer(props: Modify<GridProps, GridContainerProps>) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: '',
};
