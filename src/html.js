import React, { Component } from 'react';
import { TypographyStyle } from 'react-typography';
import typography from './configs/typography';

import androidchrome192 from './images/android-chrome-192x192.png';
import androidchrome512 from './images/android-chrome-512x512.png';
import appletouch from './images/apple-touch-icon.png';
import favicon16 from './images/favicon-16x16.png';
import favicon32 from './images/favicon-32x32.png';
import favicon from './images/favicon.ico';
import mstile from './images/mstile-150x150.png';
import safari from './images/safari-pinned-tab.svg';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={appletouch}/>
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
          <link rel="manifest" href="/public/site.webmanifest"/>
          <link rel="mask-icon" href={safari} color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
