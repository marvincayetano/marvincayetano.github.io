import styled from 'styled-components';
import { media } from '../../styles/MediaQueryTemplate';

const FooterContainer = styled.footer`
  background-color: var(--black);
  padding-top: 130px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 617px;
  justify-content: center;
  align-items: center;
  ${media.phone`
    padding-top: 75px;
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  > a {
    z-index: 1;
    transition: 350ms;
  }
  > a:hover {
    transform: rotate(20deg);
  }
`;

const FooterText = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 42px;
  letter-spacing: 1px;
  line-height: 1.2;
  > a {
    height: 40px;
    font-size: 14px;
    letter-spacing: 0.125rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 30px;
    transition: box-shadow 180ms ease-in-out;
    border-radius: 4px;
    padding: 2px 4px;
    &:hover {
      color: var(--gray-60);
      box-shadow: 0px -64px 0px 0px var(--white) inset;
    }
  }
`;

export { FooterContainer, FooterText, ButtonsContainer };
