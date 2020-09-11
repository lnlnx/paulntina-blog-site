import React from 'react';
import { Card } from '../components/Card/Card';
import { CardHeader } from '../components/Card/CardHeader';
import { CardBody } from '../components/Card/CardBody';
import { makeStyles } from '@material-ui/core';
import { destinationCoverStyle } from '../assets/jss/views/destinationCoverStyle';
import { DestinationPost } from './sections/DestinationSection';
import GoogleImage from '../components/GoogleImage/GoogleImage';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const useStyle = makeStyles(destinationCoverStyle);
export interface DestinationCoverProps {
  rootUrl: string;
  post: DestinationPost;
}

const DestinationCover = (props: DestinationCoverProps) => {
  const { rootUrl, post } = props;
  const { id, detailAddress, placeName, budget } = post;
  const classes = useStyle();

  const flexContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <Card plain profile className={classes.cardContainer}>
      <CardHeader image plain>
        <GoogleImage
          shadow
          imageName={props.post.imageName}
          redirectUrl={`${rootUrl}/${id}`}
        />
      </CardHeader>
      <CardBody plain>
        <div style={flexContainer}>
          <p className={classes.description}>{placeName}</p>
          <p className={classes.description}>${budget}</p>
        </div>
        <div style={flexContainer}>
          <p className={classes.subdescription}>{detailAddress}</p>
          <p className={classes.subdescription}>Budget</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default DestinationCover;
