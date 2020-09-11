import React from 'react';
import { Header, HeaderColor } from '../components/Header/Header';
import { useRouteMatch, match, Switch, Route } from 'react-router-dom';
import { HeaderLinks } from '../components/Header/HeaderLinks';
import { Footer } from '../components/Footer';
import { DestinationMainPage } from './DestinationMainPage';
import DestinationSection from './sections/DestinationSection';

const DestinationPage = () => {
  const routeMatch: match<{}> | null = useRouteMatch();
  return (
    <div>
      <Header
        color={HeaderColor.dark}
        brand='PaulnTina'
        leftLinks={<HeaderLinks />}
        fixed
      />
      <Switch>
        <Route path={`${routeMatch.path}/:postId`}>
          <DestinationSection zoom={12} />
        </Route>
        <Route path={routeMatch.path}>
          {<DestinationMainPage rootUrl={routeMatch.path} />}
        </Route>
      </Switch>
      {routeMatch.isExact ? <Footer /> : null}
    </div>
  );
};

export default DestinationPage;
