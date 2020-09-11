import { container, title, description } from '../common';
import { StyleRules } from '@material-ui/core/styles';

export const destinationMainPageStyle: StyleRules<string, object> = {
  container: {
    ...container,
    padding: '0',
  },
  header: {
    display: 'flex',
    verticalAlign: 'bottom',
    padding: '40px 0',
    margin: '0',
    alignItems: 'flex-end',
    borderBottom: '1px solid lightgray',
  },
  title: {
    ...title,
    fontSize: '127px',
    letterSpacing: '-0.042em',
    margin: '0',
    lineHeight: '110px',
  },
  sectionTitle: {
    ...title,
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '-0.042em',
    fontWeight: 600,
    marginBottom: 0,
  },
  description: {
    ...description,
    textAlign: 'left',
    fontSize: '16px',
    margin: '0 0 0 35px',
    lineHeight: '16px',
    maxWidth: '150px',
  },
  textCenter: {
    textAlign: 'center',
  },
  team: {
    padding: '80px 0',
    '& h5$description,& h5$descriptionWhite': {
      marginBottom: '80px',
    },
  },
};
