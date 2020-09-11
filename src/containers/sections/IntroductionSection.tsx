import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { teamStyle } from '../../assets/jss/views/introductionStyle';

import avatar from '../../assets/img/cover-avatar.jpg';
import {
  RegularButton,
  ButtonColor,
} from '../../components/CustomButtons/Button';
import { Card } from '../../components/Card/Card';
import { CardBody } from '../../components/Card/CardBody';
import { CardFooter } from '../../components/Card/CardFooter';

const useStyles = makeStyles(teamStyle);

export function IntroductionSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.image
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>This is who I am</h2>
      <div>
        <Card
          plain
          style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <img src={avatar} alt='...' className={imageClasses} />
          <h4 className={classes.cardTitle}>
            Tingting Chen
            <br />
            <small className={classes.smallTitle}>Frontend Developer</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              I am a freelance web developer. My husband and I love traveling
              and this is why I built this website. By the way, I am also
              looking for a full time job. If you like my work, please feel free
              to contact me via blow links!
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            <RegularButton
              justIcon
              color={ButtonColor.transparent}
              className={classes.margin5}
              href='https://www.linkedin.com/in/tingting-chen-25a480176/'
            >
              <i className={classes.socials + ' fab fa-linkedin'} />
            </RegularButton>
            <RegularButton
              justIcon
              color={ButtonColor.transparent}
              className={classes.margin5}
              href='https://www.instagram.com/whatevernoam/'
            >
              <i className={classes.socials + ' fab fa-instagram'} />
            </RegularButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
