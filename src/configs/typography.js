import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const options = {
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  scaleRatio: 2.25,
  bodyColor: '#FFF',
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => ({
    html: {
      overflow: 'auto',
    },
    body: {
      background: '#111',
      lineHeight: '1.5',
      overflow: 'hidden',
    },
    a: {
      color: '#FFF',
      textDecoration: 'none',
    },
    p: {
      fontSize: '20px',
    },
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`,
      },
    },
  }),
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
