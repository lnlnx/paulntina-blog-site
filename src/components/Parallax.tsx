import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import { parallaxStyle } from '../assets/jss/components/parallaxStyle';

const useStyles = makeStyles(parallaxStyle);

interface ParallaxProps {
  className: string;
  filter: boolean;
  children?: React.ReactNode;
  image: string;
  small?: boolean;
}

export function Parallax(props: ParallaxProps) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  const { filter, className, children, image, small } = props;
  const cssClasses = useStyles();
  const classNameObj = {
    [cssClasses.parallax]: true,
    [cssClasses.filter]: filter,
    [cssClasses.small]: small,
  };
  if (className) {
    classNameObj[className] = className !== undefined;
  }
  const parallaxClasses = classNames(classNameObj);
  return (
    <div
      className={parallaxClasses}
      style={{
        backgroundImage: 'url(' + image + ')',
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.defaultProps = {
  className: '',
};
