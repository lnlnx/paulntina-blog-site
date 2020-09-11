import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { Modify } from '../../utils/types';

const styles: StyleRules<string, object> = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

const useStyles = makeStyles(styles);

export interface GridItemProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridItem(props: Modify<GridProps, GridItemProps>) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: '',
};
