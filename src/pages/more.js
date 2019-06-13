import React from 'react'
import { Divider, Title, Wrapper } from '../components/Heading';
import { VideoDiv, CameraDiv, SvgCamera, SvgVideo } from '../components/MoreStyles';

import thumbYoutube from '../images/thumbnail-youtube.jpg';

const MorePage = () => (
  <Wrapper>
    <Title>here's more</Title>
    <VideoDiv>
      <SvgVideo><path fill="#fff" d="M56 17.2L54 4.1A3.9 3.9 0 0 0 49.6 1L3.3 8.2A3.9 3.9 0 0 0 0 12.5l5.8 37.3a3.8 3.8 0 0 0 4.4 3.1l46.3-7.2a3.8 3.8 0 0 0 3.3-4.3l-2.1-13L74.8 41 68.4 0z"/></SvgVideo>
      <p>I also making videos please check them out!</p>
    </VideoDiv>
    <Divider></Divider>
    <CameraDiv>
      <SvgCamera><circle cx="37.8" cy="34.9" r="9.3" fill="#fff"/><path fill="#fff" d="M72.4 18.3L60.1 14l-2.9-6-17.8-6.3-6 2.9L21.1.3a6 6 0 0 0-7.5 3.6L.3 41.8a6 6 0 0 0 3.6 7.5l51.3 18a5.8 5.8 0 0 0 7.5-3.6L76 25.8a6 6 0 0 0-3.6-7.5zM32.3 50.5a16.5 16.5 0 0 1 10.9-31.2 16.5 16.5 0 1 1-10.9 31.2z"/></SvgCamera>
      <p>I also making videos please check them out!</p>
    </CameraDiv>
  </Wrapper>
)

export default MorePage
