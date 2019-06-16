import styled from 'styled-components';
import { media } from '../../styles/MediaQueryTemplate';

const AboutContainer = styled.section`
  height: 1250px;
  display: grid;
  grid-template-columns: minmax(0, 285px) minmax(741px, 1fr);
  align-items: start;
  justify-content: start;
  padding-top: 260px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--orange);
  overflow: hidden;
  ${media.giant`
    grid-template-columns: 0 minmax(0, auto);
  `}
  ${media.tablet`
    height: 1500px;
  `}
  ${media.phone`
    height: 1550px;
    padding-top: 130px;
  `}
`;

const TerminalContainer = styled.div`
  grid-column: 2;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto 0 0;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const TerminalWindowBar = styled.div`
  display: flex;
  height: 23px;
  background-color: var(--gray-40);
  border-radius: 7px 7px 0px 0px;
`;

const TerminalWindowText = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  > h3 {
    font-size: 14px;
    margin-left: -70px;
    color: var(--black-20);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
  }
`;

const TerminalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > div {
    border-radius: 50px;
    height: 13px;
    width: 13px;
    margin-right: 4px;
    margin-left: 4px;
  }
  > div:nth-child(1) {
    margin-left: 8px;
    background-color: var(--red-macos);
    border: 0.5px solid var(--red-macos-20);
  }
  > div:nth-child(2) {
    background-color: var(--yellow-macos);
    border: 0.5px solid var(--yellow-macos-20);
  }
  > div:nth-child(3) {
    background-color: var(--green-macos);
    border: 0.5px solid var(--green-macos-20);
  }
`;

const TerminalContent = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: 0.85;
  padding: 6px 12px;
  line-height: 2;
  border-radius: 0px 0px 7px 7px;
  letter-spacing: 1px;
  font-size: 14px;
  .about__date {
    font-weight: 400;
    line-height: 2.5;
  }
  .about__description {
    font-weight: 600;
    color: var(--green-macos-20);
  }
  .about__text {
    font-weight: 400;
  }
  .about__blinker {
    background-color: var(--green-macos-20);
    white-space: nowrap;
    animation: blinker 1s ease infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export {
  AboutContainer,
  TerminalContainer,
  TerminalWindowBar,
  TerminalButtonContainer,
  TerminalWindowText,
  TerminalContent,
};
