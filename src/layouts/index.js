import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ShowcaseVideo, ShowcaseOverlay, SiteHeader, SiteNav, Main, NavLink } from '../components/Heading';

import showcaseMp4 from '../pages/showcase.mp4'
import showcaseWebm from '../pages/showcase.webm'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title={'Marvin Cayetano'}
          meta={[
            { name: 'description', content: 'This is my portfolio' },
            { name: 'keywords', content: 'portfolio' },
          ]}
        />
        <ShowcaseOverlay></ShowcaseOverlay>
        <ShowcaseVideo>
          <source src={showcaseMp4} type='video/mp4'/>
          <source src={showcaseWebm} type='video/webm'/>
        </ShowcaseVideo>
        <SiteHeader>
          <SiteNav>
            <ul>
              <li>
                <NavLink to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink to='/more'>
                  ...
                </NavLink>
              </li> */}
            </ul>
          </SiteNav>
        </SiteHeader>
        <Main>
          {this.props.children()}
        </Main>
      </div>
    );
  }
}