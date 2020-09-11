import React, { Fragment } from 'react';
import { InfoWindow, GoogleMapPlace } from './InfoWindow';
import { ChildComponentProps } from 'google-map-react';

export interface CustomMarkerProps {
  show: boolean;
  place: GoogleMapPlace;
}

export const CustomMarker = (
  props: CustomMarkerProps & ChildComponentProps
) => {
  const { show, place } = props;
  return (
    <Fragment>
      <div
        style={{
          border: '1px solid white',
          borderRadius: '50%',
          height: 10,
          width: 10,
          backgroundColor: show ? 'red' : 'blue',
          cursor: 'pointer',
          zIndex: 10,
          position: 'relative',
        }}
      />
      {show && <InfoWindow place={place} />}
    </Fragment>
  );
};
