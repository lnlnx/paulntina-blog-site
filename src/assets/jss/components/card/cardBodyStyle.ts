import { StyleRules } from '@material-ui/core/styles';
import { hexToRgb, whiteColor } from '../../common';

export const cardBodyStyle: StyleRules<string, object> = {
  cardBody: {
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto',
    WebkitBoxFlex: 1,
  },
  cardBodyBackground: {
    position: 'relative',
    zIndex: 2,
    minHeight: '280px',
    paddingTop: '40px',
    paddingBottom: '40px',
    maxWidth: '440px',
    margin: '0 auto',
  },
  cardBodyPlain: {
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '100%',
  },
  cardBodyFormHorizontal: {
    paddingLeft: '15px',
    paddingRight: '15px',
    '& form': {
      margin: '0',
    },
  },
  cardBodyColor: {
    borderRadius: '6px',
    '& h1,& h2,& h3': {
      '& small': {
        color: 'rgba(' + hexToRgb(whiteColor) + ', 0.8)',
      },
    },
  },
};
