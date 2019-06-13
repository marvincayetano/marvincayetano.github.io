import styled from 'styled-components';
import { animated } from 'react-spring';
import { media } from '../../styles/MediaQueryTemplate';

const HeaderContainer = styled(animated.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: grid;
  padding-left: 30px;
  padding-right: 30px;
  grid-template-columns: minmax(30px, 260px) 1fr;
  grid-template-rows: 64px;
  align-items: center;
  letter-spacing: 0.2em;
  text-indent: 0;
  transition: background-color 180ms ease-in;
  ${({ isinside }) =>
    isinside &&
    `
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.10);
    > div a {
        color: var(--black-20);
        &: hover {
            color: var(--white);
            box-shadow: 0px -64px 0px 0px var(--black-20) inset;
        }
    }
    > div img {
        background-color: var(--black-20);
    }`};
  ${media.tablet`
    padding: 0;
    margin: 0;
    grid-template-columns: 1fr;
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  ${media.tablet`
    display: none;
  `}
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${media.tablet`
    justify-content: space-evenly;
  `}
  > a {
    padding: 25.5px 15px;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow 180ms ease-in-out;
    ${media.phone`
        padding-left: 10px;
        padding-right: 10px;
    `}
    &:hover {
      color: var(--gray-60);
      box-shadow: 0px -64px 0px 0px var(--white) inset;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;

export { HeaderContainer, LogoWrapper, LeftContainer, RightContainer };
