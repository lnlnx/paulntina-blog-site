/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import { RegularButton, ButtonColor } from '../CustomButtons/Button';

import { headerLinksStyle } from '../../assets/jss/components/headerLinksStyle';

const useStyles = makeStyles(headerLinksStyle);

export interface HeaderLinksProps {}

export function HeaderLinks(props: HeaderLinksProps) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <RegularButton
          href='/memories'
          color={ButtonColor.transparent}
          className={classes.navLink}
        >
          Memories
        </RegularButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <RegularButton
          href='/plans'
          color={ButtonColor.transparent}
          className={classes.navLink}
        >
          Next detinations
        </RegularButton>
      </ListItem>
    </List>
  );
}
