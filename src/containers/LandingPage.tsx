import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import { Header, HeaderColor } from '../components/Header/Header';
import { Footer } from '../components/Footer';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
// import HeaderLinks from '../components/Header/HeaderLinks';
import { Parallax } from '../components/Parallax';
import { landingPageStyle } from '../assets/jss/views/landingPageStyle';
import { HeaderLinks } from '../components/Header/HeaderLinks';
import { IntroductionSection } from './sections/IntroductionSection';

const useStyles = makeStyles(landingPageStyle);

interface LandingPageProps {}

export default function LandingPage(props: LandingPageProps) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color={HeaderColor.transparent}
        brand='PaulnTina'
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: HeaderColor.dark,
        }}
        {...rest}
      />
      <Parallax filter image={require('../assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Our Story</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <IntroductionSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
