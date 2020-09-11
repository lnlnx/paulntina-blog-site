import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  grayColor,
} from '../common';
import { StyleRules } from '@material-ui/core/styles';

export const blogsSectionStyle: StyleRules<string, object> = {
  container,
  title,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    padding: '50px 0',
  },
  cardCategory: {
    marginBottom: '0',
    marginTop: '10px',
    '& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: '8px',
      lineHeight: '0',
    },
  },
  description1: {
    ...description,
    lineHeight: '1.313rem',
    marginTop: 34,
  },
  author: {
    '& a': {
      color: grayColor[1],
      textDecoration: 'none',
    },
  },
  card: {
    marginBottom: '80px',
  },
  card4: {
    marginBottom: '60px',
    textAlign: 'center',
  },
};
