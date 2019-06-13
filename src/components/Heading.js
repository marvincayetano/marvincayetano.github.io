import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import { media } from '../components/MediaQueries';

const ShowcaseOverlay = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
  background: #263238;
  z-index: -99;
  opacity: 0.8;
`;

const ShowcaseVideo = styled.video.attrs({
  preload: true,
  autoPlay: true,
  loop: true,
  muted: true,
})`
  position: fixed;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.div`
  font-size: 38px;
  margin-bottom: 30px;
  letter-spacing: 5px;
  text-align: center;
  color: #FFF;
  ${media.phone`
    font-size: 18px;
  `}
`;

const SiteTitle = styled.div`
  margin-top: 40px;
  ${media.tablet`
    display: block;
  `}
`;

const SubTitle = styled.div`
  padding-left: 80px;
  font-size: 20px;
  margin: 0 20px;
  ${media.tablet`
    padding-left: 60px;
    > p {
      font-size: 18px;
    }
  `}
  ${media.phone`
    padding-left: 20px;
    > p {
      font-size: 16px;
    }
  `}
`;

const Main = styled.main`
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
  color: #FFF;
`;

const MainWrapper = styled.div`
`;

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  &:hover {
    h1 {
      transform: translate3d(80px, 0, 0);
      transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;

const SiteNav = styled.nav`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: box-shadow 150ms ease-in-out;
  ${media.tablet`
    font-size: 16px;
  `}
  &:hover {
    color: #424242;
    box-shadow: 0px -64px 0px 0px #FFF inset;
  }
`;

const Wrapper = styled.div`
  border-radius: 8px;
  > p {
    ${media.phone`
        font-size: 16px;
  `}
  }
`;

const Divider = styled.div`
  height: 50px;
`;

export {
  Divider,
  ShowcaseVideo,
  ShowcaseOverlay,
  SiteTitle,
  SubTitle,
  MainWrapper,
  Wrapper,
  Main,
  SiteHeader,
  SiteNav,
  NavLink,
  Title,
};
