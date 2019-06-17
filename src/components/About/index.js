import React, { useState } from 'react';
import {
  AboutContainer,
  TerminalContainer,
  TerminalWindowBar,
  TerminalWindowText,
  TerminalButtonContainer,
  TerminalContent,
} from './styles';

import AboutDescription from './AboutDescription';

export default function About() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AboutContainer id="about">
      {isVisible ? (
        <TerminalContainer>
          <TerminalWindowBar>
            <TerminalButtonContainer>
              {/* eslint-disable-next-line */}
            <div
                onClick={() => {
                  setIsVisible(false);
                }}
              />
              <div />
              <div />
            </TerminalButtonContainer>
            <TerminalWindowText>
              <h3>ABOUT</h3>
            </TerminalWindowText>
          </TerminalWindowBar>
          <TerminalContent>
            <p className="about__date">
              Last Updated: Wed Jun &nbsp; 5 2019 11:15:09 on console
              <br />
            </p>
            <AboutDescription text="Hello World!" />
            <AboutDescription text="I'm Marvin Cayetano," />
            <AboutDescription
              text="a currently 3rd year student in Computer Engineering -
            Computing Science program \"
            />
            <AboutDescription
              text="at Algonquin College which is located in Ottawa,
            Canada.
"
            />
            <AboutDescription />
            <AboutDescription
              text="I am originally from the Philippines which you will
            notice with my awesome accent. 🔥
"
            />
            <AboutDescription />
            <AboutDescription text="I specialize in web development, but I also have some experience with Machine Learning \" />
            <AboutDescription text="where we developed a Machine Learning program that detects Cancer cells through images." />
            <AboutDescription />
            <AboutDescription
              text="I love software development, and I don't see myself
            happy doing anything else.
"
            />
            <AboutDescription />
            <AboutDescription
              text={
                <span>
                  If you are interested in hiring me as a coop or full-time, shoot me a quick&nbsp;
                  <a className="about__email" href="mailto:cayetanomarvin@gmail.com?Subject=Quick%20Email%20Portfolio">
                    email
                  </a>
                  .
                </span>
              }
            />
            <AboutDescription />
            <AboutDescription />
            <AboutDescription />
            <AboutDescription />
            <AboutDescription />
            <AboutDescription />
            <AboutDescription
              text='"There will always be someone who is better at
            what you do,
'
            />
            <AboutDescription
              text="you can't outsmart them, but you can always work
            harder than them&quot;"
            />
            <i>
              <AboutDescription text="- Casey Neistat" />
            </i>
            <AboutDescription text={<span className="about__blinker">&nbsp;</span>} />
            <br /> &nbsp;
          </TerminalContent>
        </TerminalContainer>
      ) : (
        <h1 style={{ gridColumn: 2 }}>GOTCHA!</h1>
      )}
    </AboutContainer>
  );
}
