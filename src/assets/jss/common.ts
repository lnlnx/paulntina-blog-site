/*!

 =========================================================
 * Material Kit React - v1.9.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

import { CSSProperties } from '@material-ui/core/styles/withStyles';

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const hexToRgb = (input: string): string => {
  input = input + '';
  input = input.replace('#', '');
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ', ' +
    parseInt(second, 16) +
    ', ' +
    parseInt(last, 16)
  );
};

const drawerWidth = 260;

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};
const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
  '@media (min-width: 1400px)': {
    maxWidth: '90%',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
};

const defaultFont: CSSProperties = {
  fontFamily:
    '"Neue Haas Grotesk Display Pro", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
};

const mlAuto = {
  marginLeft: 'auto',
};

const mrAuto = {
  marginRight: 'auto',
};

const primaryColor = [
  '#9c27b0',
  '#ab47bc',
  '#8e24aa',
  '#af2cc5',
  '#e1bee7',
  '#ba68c8',
];
const secondaryColor = ['#fafafa'];
const warningColor = [
  '#ff9800',
  '#ffa726',
  '#fb8c00',
  '#ffa21a',
  '#fcf8e3',
  '#faf2cc',
  '#ffe0b2',
  '#ffb74d',
];
const dangerColor = [
  '#f44336',
  '#ef5350',
  '#e53935',
  '#f55a4e',
  '#f2dede',
  '#ebcccc',
  'ef9a9a',
  '#ef5350',
];
const successColor = [
  '#4caf50',
  '#66bb6a',
  '#43a047',
  '#5cb860',
  '#dff0d8',
  '#d0e9c6',
  '#a5d6a7',
  '#66bb6a',
];
const infoColor = [
  '#00acc1',
  '#26c6da',
  '#00acc1',
  '#00d3ee',
  '#d9edf7',
  '#c4e3f3',
  '#b2ebf2',
  '#4dd0e1',
];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#f8bbd0', '#f06292'];
const grayColor = [
  '#999',
  '#3C4858',
  '#eee',
  '#343434',
  '#585858',
  '#232323',
  '#ddd',
  '#6c757d',
  '#333',
  '#212121',
  '#777',
  '#D2D2D2',
  '#AAA',
  '#495057',
  '#e5e5e5',
  '#555',
  '#f9f9f9',
  '#ccc',
  '#444',
  '#f2f2f2',
  '#89229b',
  '#c0c1c2',
  '#9a9a9a',
  '#f5f5f5',
  '#505050',
  '#1f1f1f',
];
const whiteColor = '#FFF';
const blackColor = '#000';
const twitterColor = '#55acee';
const youtubeColor = '#e52d27';

const description = {
  color: grayColor[0],
  fontFamily: `'acumin-pro', sans-serif`,
};

const coloredShadow: CSSProperties = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    display: 'none !important',
  },
  transform: 'scale(0.94)',
  top: '12px',
  filter: 'blur(12px)',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  zIndex: -1,
  transition: 'opacity .45s',
  opacity: '0',
};

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

const warningCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};
const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const title: CSSProperties = {
  color: blackColor,
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: 700,
  fontFamily: `'acumin-pro', sans-serif`,
};

const cardTitle = {
  ...title,
  marginTop: '.625rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem',
};

const section = {
  backgroundPosition: '50%',
  backgroundSize: 'cover',
};

const sectionDark = {
  backgroundColor: grayColor[3],
  background:
    'radial-gradient(ellipse at center,' +
    grayColor[4] +
    ' 0,' +
    grayColor[5] +
    ' 100%)',
};

export {
  //variables
  hexToRgb,
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  twitterColor,
  youtubeColor,
  secondaryColor,
  description,
  coloredShadow,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  mlAuto,
  mrAuto,
  section,
  sectionDark,
};
