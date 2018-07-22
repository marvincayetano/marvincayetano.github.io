import styled, { css } from 'styled-components';

import { media } from '../components/MediaQueries';

const SvgLinkedIn = styled.svg.attrs({
  id: 'svg-linkedin',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  position: absolute;
  height: 210px;
  width: 210px;
  margin-top: -120px;
  margin-left: -80px;
  > path {
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  }
  ${media.tablet`
    margin-top: -90px;
    margin-left: -55px;
  `}
  > path:hover {
    transition: none;
    opacity: 1;
  }
`;

export {
  SvgLinkedIn,
}