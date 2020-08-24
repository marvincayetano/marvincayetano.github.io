import React from 'react';
import styled from 'styled-components';
import media from '../styles/MediaQueryTemplate';
import {
  TerminalContainer,
  TerminalWindowBar,
  TerminalWindowText,
  TerminalButtonContainer,
  TerminalContent,
} from '../components/About/styles';

import AboutDescription from '../components/About/AboutDescription';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 285px) minmax(741px, 1fr);
  align-items: center;
  justify-content: start;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--orange);
  overflow: hidden;
  ${media.giant`
    grid-template-columns: 0 minmax(0, auto);
  `}
`;
export default function NotFoundPage() {
  return (
    <Container>
      <TerminalContainer>
        <TerminalWindowBar>
          <TerminalButtonContainer>
            <div />
            <div />
            <div />
          </TerminalButtonContainer>
          <TerminalWindowText>
            <h3>404</h3>
          </TerminalWindowText>
        </TerminalWindowBar>
        <TerminalContent>
          <p className="about__date">
            The page you requested is not available right now.
            <br />
          </p>
          <AboutDescription text={<span className="about__blinker">&nbsp;</span>} />
          <br /> &nbsp;
        </TerminalContent>
      </TerminalContainer>
    </Container>
  );
}
