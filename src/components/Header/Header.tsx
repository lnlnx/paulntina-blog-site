import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';

// core components
import { headerStyle } from '../../assets/jss/components/headerStyle';

const useStyles = makeStyles(headerStyle);

export enum HeaderColor {
  primary = 'primary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  transparent = 'transparent',
  white = 'white',
  rose = 'rose',
  dark = 'dark',
}

interface ChangeColorProps {
  height: number;
  color: HeaderColor;
}

interface HeaderProps {
  color: HeaderColor;
  rightLinks?: React.ReactNode;
  leftLinks?: React.ReactNode;
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll?: ChangeColorProps;
}

export function Header(props: HeaderProps) {
  const cssClasses = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (changeColorOnScroll && windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(cssClasses[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(cssClasses[changeColorOnScroll.color]);
    } else if (changeColorOnScroll) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(cssClasses[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(cssClasses[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [cssClasses.appBar]: true,
    [cssClasses[color]]: color,
    [cssClasses.absolute]: absolute,
    [cssClasses.fixed]: fixed,
  });
  const brandComponent = (
    <Button className={cssClasses.title} href='/'>
      {brand}
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={cssClasses.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={cssClasses.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation='css'>
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation='css'>
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: cssClasses.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={cssClasses.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: 'white',
};
