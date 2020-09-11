import React, { MouseEvent } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

// core components
import { RegularButton, RegularButtonProps } from '../CustomButtons/Button';

import styles from '../../assets/jss/components/customDropdownStyle';
import { SvgIconComponent } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export enum CustomDropdownHoverColor {
  black = 'black',
  primary = 'primary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  rose = 'rose',
}
export interface CustomDropdownProps {
  hoverColor?: CustomDropdownHoverColor;
  buttonText?: React.ReactNode;
  ButtonIcon?: SvgIconComponent;
  buttonIconName?: string;
  dropdownList?: [string, React.ReactNode][];
  buttonProps?: RegularButtonProps;
  dropup?: boolean;
  dropdownHeader?: React.ReactNode;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  // function that retuns the selected item
  onClick?: (node: React.ReactNode) => void;
}

export function CustomDropdown(props: CustomDropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | (EventTarget & HTMLAnchorElement) | null
  >(null);
  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (
      anchorEl &&
      event.target instanceof Element &&
      anchorEl.contains(event.target)
    ) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (node: React.ReactNode) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(node);
    }
  };
  const handleCloseAway: (event: React.MouseEvent<Document>) => void = (
    event
  ) => {
    if (
      anchorEl &&
      event.target instanceof Element &&
      anchorEl.contains(event.target)
    ) {
      return;
    }
    setAnchorEl(null);
  };
  const classes = useStyles();
  const {
    buttonText,
    ButtonIcon,
    buttonIconName,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
  } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + 'Hover']]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });
  let icon: React.ReactNode | null = null;
  if (ButtonIcon) {
    icon = <ButtonIcon className={classes.buttonIcon} />;
  } else if (buttonIconName) {
    icon = <Icon className={classes.buttonIcon}>{buttonIconName}</Icon>;
  }

  return (
    <div>
      <div>
        <RegularButton
          aria-label='Notifications'
          aria-owns={anchorEl ? 'menu-list' : undefined}
          aria-haspopup='true'
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </RegularButton>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? 'top-start'
              : 'top'
            : left
            ? 'bottom-start'
            : 'bottom'
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            style={
              dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role='menu' className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList &&
                    dropdownList.map((listItem, key) => {
                      const [nodeKey, node] = listItem;
                      if (nodeKey === 'divider') {
                        return (
                          <Divider
                            key={key}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => handleClose(node)}
                          className={dropdownItem}
                        >
                          {node}
                        </MenuItem>
                      );
                    })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary',
};
