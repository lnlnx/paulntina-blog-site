import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import { typographyStyle } from '../../assets/jss/components/typographyStyle';

const useStyles = makeStyles(typographyStyle);

export interface InfoProps {
  children?: React.ReactNode;
}

export function Info(props: InfoProps) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.defaultFontStyle + ' ' + classes.infoText}>
      {children}
    </div>
  );
}
