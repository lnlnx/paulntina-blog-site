import React, { Fragment } from 'react';
import { Header, HeaderColor } from '../components/Header/Header';
import { HeaderLinks } from '../components/Header/HeaderLinks';
import { Parallax } from '../components/Parallax';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
import { Footer } from '../components/Footer';
import { BlogSection } from './sections/BlogSection';
import classNames from 'classnames';

import { memoryPageStyle } from '../assets/jss/views/memoryPageStyle';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch, match, Switch, Route } from 'react-router-dom';
import { MemoryPostPage } from './MemoryPostPage';

const useStyles = makeStyles(memoryPageStyle);
export interface MemoryPageProps {}

export const MemoryPage = (props: MemoryPageProps) => {
  const classes = useStyles();
  const { ...rest } = props;
  let routeMatch: match<{}> | null = useRouteMatch();
  const memoryMainPage: React.ReactNode = (
    <Fragment>
      <Parallax filter image={require('../assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Memories</h1>
              <h4 className={classes.subtitle}>
                Precious memories of places we have been, people we have met,
                and most importantly good time we had.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BlogSection />
        </div>
      </div>
    </Fragment>
  );

  return (
    <div>
      <Header
        color={routeMatch.isExact ? HeaderColor.transparent : HeaderColor.dark}
        brand='PaulnTina'
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={
          routeMatch.isExact
            ? {
                height: 400,
                color: HeaderColor.dark,
              }
            : undefined
        }
        {...rest}
      />
      <Switch>
        <Route path={`${routeMatch.path}/:postId`}>
          <MemoryPostPage />
        </Route>
        <Route path={routeMatch.path}>{memoryMainPage}</Route>
      </Switch>
      {routeMatch.isExact ? <Footer /> : null}
    </div>
  );
};
