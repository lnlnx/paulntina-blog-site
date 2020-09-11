import { title, defaultFont, blackColor, whiteColor } from '../common';
import { imagesStyle } from '../imagesStyle';
import { StyleRules } from '@material-ui/core/styles';

export const blogContentSectionStyle: StyleRules<string, object> = {
  title: {
    ...title,
    fontSize: '42px',
  },
  section: {
    paddingBottom: '0',
    backgroundSize: 'cover',
    padding: '70px 0 0 40px',
    backgroundColor: whiteColor,
  },
  sectionSubtitle: {
    ...title,
    fontSize: '20px',
    letterSpacing: '-0.04em',
  },
  sectionPhoto: {},
  sectionText: {
    fontSize: '14px',
    ...defaultFont,
    lineHeight: '1.5em',
    color: blackColor,
    marginTop: '40px',
    marginBottom: '30px',
  },
  ...imagesStyle,
};
