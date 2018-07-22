import styled, { css } from 'styled-components';

import { media } from '../components/MediaQueries';
    
const VideoDiv = styled.div`
  padding: 0 120px;
`;

const CameraDiv = styled.div`
  padding: 0 120px;
`;

const SvgVideo = styled.svg.attrs({
  id: 'svg-video',
  xmlns: 'http://www.w3.org/2000/svg',
})`
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

const SvgCamera = styled.svg.attrs({
  id: 'svg-camera',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 85 80',
  width: '100',
  height: '80',
})`
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
  VideoDiv,
  CameraDiv,
  SvgVideo,
  SvgCamera,
}