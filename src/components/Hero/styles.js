import styled from 'styled-components';
import { animated } from 'react-spring';
import media from '../../styles/MediaQueryTemplate';

const HeroContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 100vh;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  text-align: center;
`;

const HeroTitle = styled(animated.h1)`
  font-weight: 500;
  font-size: 42px;
  opacity: 1;
  line-height: 62px;
  position: relative;
  margin: 0 10px;
  ${media.tablet`
        margin-left: 5px;
    `};
`;
const HeroSubTitle = styled(animated.p)`
  padding-top: 20px;
  line-height: 2;
  font-size: 18px;
  max-width: 600px;
  font-weight: 300;
  margin: 0 10px;
`;

const ShowcaseOverlay = styled(animated.div)`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
  z-index: -99;
  background-color: var(--black);
  opacity: 0.8;
`;

const ShowcaseVideo = styled.video.attrs(props => ({
  preload: 'true',
  autoPlay: true,
  loop: true,
  muted: true,
  style: { top: `-${props.top * 0.35}px` },
}))`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
  /* top: ${props => props.top}; */
`;

const ScrollDiv = styled.div`
  position: absolute;
  left: 50%;
  right: 0;
  bottom: 20px;
  overflow: hidden;
  width: 2px;
  height: 60px;
  background-color: transparent;
`;

const Line = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 50%);
  background-position: 0 -60px;
  background-size: 100% 200%;
  animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
  @keyframes scrolldown {
    0% {
      background-position: 0 -60px;
    }
    75% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 60px;
    }
  }
`;

export { HeroContainer, HeroContent, HeroTitle, HeroSubTitle, ShowcaseOverlay, ShowcaseVideo, ScrollDiv, Line };
