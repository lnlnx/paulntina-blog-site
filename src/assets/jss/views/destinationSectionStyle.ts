import { StyleRules } from '@material-ui/core';
import { imagesStyle } from '../imagesStyle';
import { title, description } from '../common';

export const destinationSectionStyle: StyleRules<string, object> = {
  container: {
    margin: '0 0 0 90px',
    padding: '30px 0 0 0',
    '@media screen and (max-width: 568px)': {
      margin: '0 0 0 40px',
    },
  },
  mapContainer: {
    height: '500px',
    overflow: 'hidden',
    '@media screen and (max-width: 568px)': {
      height: '800px',
    },
  },
  title: {
    ...title,
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '-0.04em',
    margin: '0',
  },
  description: {
    ...description,
    fontSize: '12px',
    lineHeight: '14px',
    margin: '10px 0 0 0',
    height: '40px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  sectionHeader: {
    ...title,
    fontSize: '24px',
    lineHeight: '29px',
    margin: 0,
  },
  sectionContent: {
    ...description,
    margin: '25px 0',
    fontSize: '16px',
    lineHeight: '24px',
  },
  map: {
    height: '100%',
    '@media screen and (max-width: 568px)': {
      height: '300px',
    },
  },
  ...imagesStyle,
  image: {
    height: '100%',
    padding: 0,
    '@media screen and (max-width: 568px)': {
      height: '500px',
    },
  },
  wrapper: {
    // width: '100%',
    '&::before': {
      content: ' ',
      display: 'table',
    },
    '&::after': {
      content: ' ',
      display: 'table',
      clear: 'both',
    },
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    margin: '50px 0 0 90px',
    '@media screen and (max-width: 568px)': {
      margin: '30px 40px 0 40px',
    },
  },
  contentWrapper: {
    float: 'left',
    width: '80%',
    marginRight: 'auto',
    '@media screen and (max-width: 568px)': {
      width: '100%',
    },
  },
  sidebarWrapper: {
    position: 'sticky',
    float: 'left',
    width: '15%',
    top: '70px',
    marginRight: '90px',
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 568px)': {
      display: 'none',
    },
    '@media screen and (max-width: 918px)': {
      marginRight: '40px',
    },
  },
  sidebarTitle: {
    ...title,
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'center',
  },
  sidebarSubtitle: {
    ...description,
    display: 'block',
    marginTop: '20px',
    fontSize: '16px',
    lineHeight: '18px',
    border: 0,
    borderBottom: '1px solid',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};
