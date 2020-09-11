import React, { useState, useEffect, Fragment } from 'react';
import { storage } from '../../Firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { coloredShadow } from '../../assets/jss/common';
import { makeStyles } from '@material-ui/core';

export interface GoogleImageProps
  extends React.BaseHTMLAttributes<HTMLImageElement> {
  imageName: string;
  className?: string;
  shadow?: boolean;
  redirectUrl?: string;
}

const shadowColorStyle = makeStyles({ coloredShadow });

const GoogleImage = (props: GoogleImageProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const colorClass = shadowColorStyle();
  const { shadow, redirectUrl, style } = props;

  useEffect(() => {
    storage
      .ref()
      .child(props.imageName)
      .getDownloadURL()
      .then((url: string) => setImageUrl(url))
      .catch((error) => {
        console.log(error);
        // Handle any errors
      });
  });

  if (imageUrl) {
    const image = (
      <img src={imageUrl} alt='...' className={props.className} style={style} />
    );
    const imageComponent: React.ReactNode = redirectUrl ? (
      <a href={redirectUrl}>{image}</a>
    ) : (
      image
    );
    return (
      <Fragment>
        {imageComponent}
        {shadow && (
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              opacity: '1',
            }}
            className={colorClass.coloredShadow}
          />
        )}
      </Fragment>
    );
  }

  return <CircularProgress color='secondary' />;
};

export default GoogleImage;
