import React from 'react';

export interface GoogleMapPlace {
  name: string;
  address: string;
}
export interface InfoWindowProps {
  place: GoogleMapPlace;
}
// InfoWindow component
export const InfoWindow = (props: InfoWindowProps) => {
  const { place } = props;

  return (
    <div
      style={{
        position: 'relative',
        left: '-45px',
        bottom: 80,
        width: 140,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
        padding: 10,
        fontSize: 14,
        zIndex: 100,
      }}
    >
      <div style={{ fontSize: 16 }}>{place.name}</div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>{place.address} </span>
      </div>
    </div>
  );
};
