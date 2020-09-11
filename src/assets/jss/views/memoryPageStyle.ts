import { container, title } from '../common';
import { StyleRules } from '@material-ui/core/styles';

export const memoryPageStyle: StyleRules<string, object> = {
  container: {
    zIndex: 12,
    color: '#FFFFFF',
    ...container,
    textAlign: 'center',
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    fontFamily: 'Acumin Pro',
    fontSize: '20vw',
    letterSpacing: '0',
    color: '#FFFFFF',
    '@media screen and (min-width: 576px)': {
      fontSize: '15vw',
    },
  },
  subtitle: {
    fontSize: '16px',
    fontFamily: 'Neue Haas Grotesk Display Pro',
    fontStyle: '55 Roman',
    maxWidth: '500px',
    margin: '4px auto 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: 3,
  },
  mainRaised: {
    margin: '-20px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};
