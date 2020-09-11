import { cardTitle, description, coloredShadow, blackColor } from '../common';
import { StyleRules } from '@material-ui/core';

export const destinationCoverStyle: StyleRules<string, object> = {
  cardTitle,
  coloredShadow,
  cardContainer: {
    margin: '60px 82px 0 0',
    width: '212px',
    '@media screen and (max-width: 992px)': {
      margin: '60px 60px 0 0',
    },
    '@media screen and (max-width: 768px)': {
      margin: '60px 40px 0 0',
    },
  },
  description: {
    ...description,
    fontSize: '12px',
    color: blackColor,
    fontWeight: 600,
    lineHeight: '14px',
    marginTop: '30px',
  },
  subdescription: {
    fontSize: '10px',
    lineHeight: '12px',
    ...description,
  },
};
