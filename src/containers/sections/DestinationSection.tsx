/*eslint-disable*/
import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { destinationSectionStyle } from '../../assets/jss/views/destinationSectionStyle';
import GoogleMapReact, { MapOptions } from 'google-map-react';
import { CustomMarker } from '../../components/GoogleMap/CustomMarker';
import { GridContainer } from '../../components/Grid/GridContainer';
import { GridItem } from '../../components/Grid/GridItem';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GoogleImage from '../../components/GoogleImage/GoogleImage';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router-dom';
import { firestore } from '../../Firebase';

export interface Coordinate {
  lat: number;
  lng: number;
}

const mapStyle: MapOptions = {
  scrollwheel: false,
  zoomControl: true,
  styles: [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ],
};

const useStyles = makeStyles(destinationSectionStyle);

export interface DestinationSectionProps {
  zoom?: number;
}

export interface DestinationPost {
  id: string;
  imageName: string;
  placeName: string;
  budget: number;
  detailAddress: string;
  coordinate: Coordinate;
  paragraphs: DestinationPostParagraph[];
  continent: string;
}

export interface DestinationPostParagraph {
  title: string;
  content: string;
}

export default function DestinationSection(props: DestinationSectionProps) {
  const classes = useStyles();
  const [postData, setPostData] = useState<DestinationPost | undefined>(
    undefined
  );

  let { postId }: { postId: string } = useParams();

  useEffect(() => {
    firestore
      .collection('plan-blogs')
      .doc(postId)
      .get()
      .then((value) => {
        const blog = value.data() as DestinationPost;
        setPostData(blog);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (postData === undefined) {
    return (
      <div>
        <CircularProgress color='secondary' />;
      </div>
    );
  }

  const customMap = (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyC5DRtz0-b_Ye3D1wSGnvVgMVPgjF6RwSI' }}
      defaultCenter={postData.coordinate}
      defaultZoom={props.zoom ? props.zoom : 12}
      options={mapStyle}
    >
      <CustomMarker
        key={1}
        {...postData.coordinate}
        show={true}
        place={{ name: postData.placeName, address: postData.detailAddress }}
      />
    </GoogleMapReact>
  );

  const refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  } = postData.paragraphs.reduce<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>((acc, _, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  const sectionContent: React.ReactNode = postData.paragraphs.map(
    (data: DestinationPostParagraph, index: number) => (
      <Fragment key={index}>
        <div className={classes.sectionHeader} ref={refs[index]}>
          {data.title}
        </div>
        <p className={classes.sectionContent}>{data.content}</p>
      </Fragment>
    )
  );

  const handleSidebarClick = (index: number): void => {
    const currentView = refs[index].current;
    if (currentView) {
      currentView.scrollTop = 1000;
      currentView.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  const sideBarNavs: React.ReactNode = postData.paragraphs.map(
    (data: DestinationPostParagraph, index: number) => (
      <button
        onClick={() => handleSidebarClick(index)}
        className={classes.sidebarSubtitle}
        key={`nav_${index}`}
      >
        {data.title}
      </button>
    )
  );

  return (
    <div style={{ width: '100%', marginTop: '70px' }}>
      <GridContainer className={classes.container}>
        <GridItem xs={6} sm={12}>
          <p className={classes.title}>{postData.placeName}</p>
        </GridItem>
        <GridItem xs={6} sm={12} className={classes.description}>
          <span style={{ lineHeight: '14px' }}>{postData.detailAddress} </span>
          <AttachMoneyIcon
            style={{
              width: '14px',
              height: '14px',
              marginLeft: '30px',
              color: 'black',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              lineHeight: '12px',
              color: 'black',
            }}
          >
            {' '}
            {postData.budget}
          </span>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.mapContainer}>
        <GridItem xs={12} sm={9} md={7} className={classes.image}>
          <GoogleImage
            imageName={postData.imageName}
            style={{ width: '100%', minHeight: '100%' }}
          />
        </GridItem>
        <GridItem xs={12} sm={3} md={5} style={{ padding: 0 }}>
          <div className={classes.map}>{customMap}</div>
        </GridItem>
      </GridContainer>
      <div className={classes.wrapper}>
        <div className={classes.contentWrapper}>{sectionContent}</div>
        <div className={classes.sidebarWrapper}>
          <p className={classes.sidebarTitle}>Content</p>
          {sideBarNavs}
        </div>
      </div>
    </div>
  );
}
